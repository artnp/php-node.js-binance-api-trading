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

        //ยกเลิกออเดอร์เทรดทั้งหมด
        var endPoint = "/api/v3/openOrders";
        var dataQueryString = "symbol=" + localStorage['symbol'] + "BUSD&recvWindow=2000&timestamp=" + Date.now();
        var signature = crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');
        var url = burl + endPoint + '?' + dataQueryString + '&signature=' + signature;
        var ourRequest = new XMLHttpRequest();
        ourRequest.open('DELETE',url,true);
        ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']);
        ourRequest.onload = function(){
        }
        ourRequest.send();

        await delay(300); //หน่วงเวลา

    //ขายราคาตลาด
    var endPoint2 = "/api/v3/order";
    var dataQueryString2 = "symbol=" + localStorage['symbol'] + "BUSD&side=SELL&type=MARKET&quantity=" + localStorage['Executed'] + "&timestamp=" + Date.now(); //ค่าธรรมเนียมแก้เป็น executedfee
    var signature2 = crypto.createHmac('sha256',keys['skey']).update(dataQueryString2).digest('hex');
    var url2 = burl + endPoint2 + '?' + dataQueryString2 + '&signature=' + signature2;
    var ourRequest2 = new XMLHttpRequest();
    ourRequest2.open('POST',url2,true);
    ourRequest2.setRequestHeader('X-MBX-APIKEY', keys['akey']);
    ourRequest2.onload = function(){
      ourData2 = JSON.parse(ourRequest2.responseText);
      console.log('คำสั่งขายราคาตลาดสำเร็จ');
    }
    ourRequest2.send();

    localStorage['askPrice'] = 0;
    localStorage['Executed'] = 0;
    localStorage['Total'] = 0;
    localStorage['executedfee'] = 0;

    }
    slowdown();

   