if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }    

  localStorage['akey'] = ''; // ใส่ API จาก binance
  localStorage['skey'] = ''; // ใส่ API จาก binance
  var fee = 0.001; // หากเก็บค่าธรรมเนียมแก้เป็น 0.075
  
  var keys = {
    "akey" : localStorage['akey'],
    "skey" : localStorage['skey']}
    const crypto = require('crypto');
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var burl = "https://api.binance.com";
 

    localStorage['askPrice'] = 0;
    localStorage['Executed'] = 0;
    localStorage['Total'] = 0;
    localStorage['executedfee'] = 0;
    localStorage['executedfee_backup'] = 0;
    
    	//หน่วงเวลา
  async function delay(delayInms) {
    return new Promise(resolve  => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }
  async function slowdown() {
    ///////// เช็คยอดเงินในกระเป๋า+หักค่าธรรมเนียม
    var endPoint = '/api/v3/account';
    var dataQueryString = 'timestamp=' + Date.now();
    var signature = crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');
    var url = burl + endPoint + '?' + dataQueryString + '&signature=' + signature;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',  url , true);
    ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']);
    ourRequest.onload = function(){
    ourData = JSON.parse(ourRequest.responseText);
    localStorage['busdwallet'] = Number((ourData.balances[188].free - ((ourData.balances[188].free * fee)/100)).toFixed(3));
    }
    ourRequest.send();


              //ราคา askPrice สำหรับใส่ Average
    var endPoint5 = "/api/v3/ticker/bookTicker?symbol=" + localStorage['symbol'] + "BUSD";
    var url5 = burl + endPoint5;
    var ourRequest5 = new XMLHttpRequest();
    ourRequest5.open('GET', url5 ,true);
    ourRequest5.setRequestHeader('X-MBX-APIKEY', keys['akey']);
    ourRequest5.onload = function(){
    ourData5 = JSON.parse(ourRequest5.responseText);
    localStorage['askPrice'] = parseFloat(ourData5.askPrice);    
    }
    ourRequest5.send();

    ///////////// ซื้อเหรียญคริปโตราคาตลาด
    var endPoint2 = "/api/v3/order";
    var dataQueryString2 = "symbol=" + localStorage['symbol'] + "BUSD&side=BUY&type=MARKET&quoteOrderQty="+ localStorage['busdwallet'] +"&newOrderRespType=FULL&recvWindow=20000&timestamp=" + Date.now();
    var signature2 = crypto.createHmac('sha256',keys['skey']).update(dataQueryString2).digest('hex');
    var url2 = burl + endPoint2 + '?' + dataQueryString2 + '&signature=' + signature2;
    var ourRequest2 = new XMLHttpRequest();
    ourRequest2.open('POST',url2,true);
    ourRequest2.setRequestHeader('X-MBX-APIKEY', keys['akey']);
    ourRequest2.onload = function(){
    ourData2 = JSON.parse(ourRequest2.responseText); 
    localStorage['Executed'] = parseFloat(ourData2.executedQty);
    localStorage['Total'] = parseFloat(ourData2.cummulativeQuoteQty);
    // console.log(ourData2.fills[0].price)
    }
    ourRequest2.send();

    await delay(500); //หน่วงเวลา

    // นับยอดจุดทศนิยมหลัง
    var val = Number(localStorage['askPrice']) ;
    var val2 = Number(localStorage['Executed']) ;
var countDecimals = function(value) {
  let text = value.toString()
  if (text.indexOf('e-') > -1) {
    let [base, trail] = text.split('e-');
    let deg = parseInt(trail, 10);
    return deg;
  }
  if (Math.floor(value) !== value) {
    return value.toString().split(".")[1].length || 0;
  }
  return 0;
}
    //คำนวณค่า cut-loss
    res = Number(localStorage['Total']);
    res2 = Number(localStorage['Executed']);
    res3 = parseFloat(localStorage['askPrice'].replace(/,/g, ''));
    cutloss = (res3-((res3*0.618)+res3)*0.0070243).toFixed(countDecimals(val));                                                   
    cutlossA = (res3-((res3*1.618)+res3)*0.0070243).toFixed(countDecimals(val));            
    // var mydecimal =(localStorage['Executed']).toFixed(countDecimals(val2));  //ไม่เสียค่า fee
    var mydecimal = (localStorage['Executed'] - (localStorage['Executed']*fee/100)).toFixed(countDecimals(val2));  //เสียค่า fee

    var stringde = String(mydecimal);
    var decimalcovert = Number(stringde[stringde.length - 1]) ;  //ใส่  -1 ต่อท้าย  กรณีขายมีปัญหาแก้บรรทัดนี้ executed -1 เกิน ***********
    var lastDecimalMinusOne = stringde.slice(0, -1) + decimalcovert;
    localStorage['executedfee'] = lastDecimalMinusOne; 
    localStorage['executedfee_backup'] = lastDecimalMinusOne; 

      }
      slowdown();