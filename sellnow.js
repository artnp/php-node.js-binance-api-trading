if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }    

  var keys = {
    "akey" : localStorage['akey'],
    "skey" : localStorage['skey']}
    const crypto = require('crypto');
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var burl = "https://api.binance.com";

    	//หน่วงเวลา
  async function delay(delayInms) {
    return new Promise(resolve  => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }
  async function slowdown() {

    //ราคา bidPrice
    var endPoint2 = "/api/v3/ticker/bookTicker?symbol=" + localStorage['symbol'] + "BUSD";
    var url2 = burl + endPoint2;
    var ourRequest2 = new XMLHttpRequest();
    ourRequest2.open('GET', url2 ,true);
    ourRequest2.setRequestHeader('X-MBX-APIKEY', keys['akey']);
    ourRequest2.onload = function(){
    ourData2 = JSON.parse(ourRequest2.responseText);
    localStorage['bidPrice'] = parseFloat(ourData2.bidPrice);    
    }
    ourRequest2.send();

    await delay(200); //หน่วงเวลา
    
    //////// ขายราคา askPrice
    var endPoint4 = "/api/v3/order";
    var dataQueryString4 = "symbol=" + localStorage['symbol'] + "BUSD&side=SELL&type=LIMIT&price=" + localStorage['bidPrice'] + "&timeInForce=GTC&quantity=" + localStorage['executedfee'] + "&timestamp=" + Date.now(); //ค่าธรรมเนียมแก้เป็น executedfee
    var signature4 = crypto.createHmac('sha256',keys['skey']).update(dataQueryString4).digest('hex');
    var url4 = burl + endPoint4 + '?' + dataQueryString4 + '&signature=' + signature4;
    var ourRequest4 = new XMLHttpRequest();
    ourRequest4.open('POST',url4,true);
    ourRequest4.setRequestHeader('X-MBX-APIKEY', keys['akey']);
    ourRequest4.onload = function(){
      ourData4 = JSON.parse(ourRequest2.responseText);
      // console.log(ourData4)
    }
    ourRequest4.send();

    // await delay(200); //หน่วงเวลา

    // //// ยอดเงินคงเหลือ
    // var endPoint3 = '/api/v3/account';
    // var dataQueryString3 = 'timestamp=' + Date.now();
    // var signature3 = crypto.createHmac('sha256',keys['skey']).update(dataQueryString3).digest('hex');
    // var url3 = burl + endPoint3 + '?' + dataQueryString3 + '&signature=' + signature3;
    // var ourRequest3 = new XMLHttpRequest();
    // ourRequest3.open('GET',  url3 , true);
    // ourRequest3.setRequestHeader('X-MBX-APIKEY', keys['akey']);
    // ourRequest3.onload = function(){
    // ourData3 = JSON.parse(ourRequest3.responseText);
    // console.log( ourData3.balances[188].free + ' $');
    // }
    // ourRequest3.send();

    localStorage['askPrice'] = 0;
    localStorage['Executed'] = 0;
    localStorage['Total'] = 0;
    localStorage['executedfee'] = 0;

  }
  slowdown();

