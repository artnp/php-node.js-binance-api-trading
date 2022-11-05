//คำนวณราคานำเข้าจาก data storage [Node.js]
document.getElementById('cryptologo').innerHTML="{" +"<img src='https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/128/color/"+ localStorage.getItem("symbol").toLowerCase() + ".png' width='8%'>"+"}"
var AverageCrypto = localStorage.getItem("askPrice");
var ExecutedCrypto = localStorage.getItem("executed");
var TotalCrypto = localStorage.getItem("Total");
var ocoPercent = localStorage.getItem("ocoPercent");
var ExecutedCryptoSaving = localStorage.getItem("executedSaving");

//คำนวณค่าคณิตศาสตร์
var cryptoName = localStorage.getItem("symbol");
var percent = ocoPercent/100;
var total = Number(TotalCrypto);
var executed = ExecutedCrypto;
var average = parseFloat(AverageCrypto.replace(/,/g, ''));
var fee = 0/100; //0/100ค่าธรรมเนียม
var resFee = (((total*fee)+total)+fee).toFixed(2);
var res4 = ((((resFee)*(percent))/executed+average)).toFixed(5);
var res7 = res4-average;
var res5 = (res7 * executed).toFixed(3) - (total * fee).toFixed(5);
var res6 = (total+res5).toFixed(5);
var res11 = ((res5*100)/total).toFixed(2) + " %";
var limit = Number(average-(((average*1.618)+average)*0.0070243)*1).toFixed(5)
var stop = Number((((limit-average)*executed)-(total*fee))).toFixed(5);

// แสดงผลคำนวณ % ขาดทุน คงเหลือ oco

document.getElementById('res001').innerHTML=cryptoName + ":" + "BUSD";
document.getElementById('res').innerHTML=total.toFixed(1);
document.getElementById('res2').innerHTML=Number(ExecutedCryptoSaving).toFixed(4);
document.getElementById('res3').innerHTML=average.toFixed(0);


document.getElementById('externallinks').innerHTML="<a href='https://www.binance.com/en/my/orders/exchange/openorder" +  "\' target=\'_blank\' class='links'><img src='img/tradingview.png' width='5%'>" + "</a> * <a href='https://www.binance.com/en/convert?fromCoin=" + cryptoName  +  "\' target=\'_blank\' class='links'><img src='img/binance.png' width='7%'>" + "</a>";


///////////ดึง API ราคา Real time
let ws = new WebSocket("wss://stream.binance.com:9443/ws/" + (localStorage.getItem("symbol")).toLowerCase() + "busd"  + "@ticker"); // อันเก่า @trade
let stockPriceElement = document.getElementById('info');
let lastPrice = null;

ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price  = parseFloat(stockObject.b); //bidprice อันเก่า a
    stockPriceElement.innerText = price;
    stockPriceElement.style.color = !lastPrice || lastPrice === price ? '#37B856' : price > lastPrice ? '#6CF109' : 'pink';
	lastPrice = price;

		// แสดงผลราคาคริปโต Real-time
		document.getElementById("info").innerHTML = (lastPrice).toFixed(0)
		realproF = (((lastPrice - average)*executed) - (((lastPrice - average)*executed)*fee)).toFixed(2);
		resnowday = lastPrice*ExecutedCryptoSaving
		document.getElementById('resnowday').innerHTML= "<b>" + resnowday.toFixed(2); + "</b>"

		//ดึงราคาจากตาทิพย์
		godeyes = parseFloat(localStorage.getItem("priceprediction"))
		document.getElementById("godeyescookie").innerHTML = godeyes
	document.getElementById("godeyes").innerHTML =  "" +  (100-((lastPrice*100)/godeyes)).toFixed(1) + "%"

	
	
	if ((godeyes-lastPrice).toFixed(0) > 0)  {            
		document.getElementById("godeyes").style.color = 'green'
	} else {
		document.getElementById("godeyes").style.color = 'red'
	}
	RealTimeProfit = (((lastPrice - average)*executed) - (((lastPrice - average)*executed)*fee)).toFixed(2);

		if (((RealTimeProfit*100)/total).toFixed(2) >= 0.02) {
		document.title = "✔ ---ชนะแล้วววว  💲💲💲";
		document.getElementById("showgif").innerHTML= "<img src='img/money.gif' width='25%'>"
} else if ((((((lastPrice - average)*executed) - (((lastPrice - average)*executed)*fee))*100)/total).toFixed(1) < -1) {
	document.getElementById("showgif").innerHTML= "<img src='img/down.gif' width='30%'>"
} else {
	document.getElementById("showgif").innerHTML= ""
}
if (realproF >= 0) {
		document.title = "✔" + realproF + ' $';
}
else if (realproF  < 0) {
	document.title = "❌" + realproF + ' $';
}
	   document.getElementById("realproF").innerHTML = realproF+"$";
	   res5usd = (res5 * lastPrice);
	   ProfitNowThen = (realproF * lastPrice).toFixed(2);
	   document.getElementById("res12").innerHTML =  ((RealTimeProfit*100)/total).toFixed(2) + " %"
	   if ((RealTimeProfit*100)/total >= (fee*2)) {
    document.getElementById("res12").style.color = '#14CA7E';
	}
	else {
    document.getElementById("res12").style.color = 'grey';
	}
       var percentage = ((ProfitNowThen*100)/res5usd);
	   if (percentage > 100){
		percentage = 100
	   }
$(".progressbar").animate({
	  width: percentage + "%"
},100);
	   	   if (realproF * lastPrice > 0) {
    document.getElementById("realproF").style.color = '#1FD715';
			}
			else {
    document.getElementById("realproF").style.color = '#FA2727';
			}
   }