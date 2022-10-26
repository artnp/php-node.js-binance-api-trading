//คำนวณราคานำเข้าจาก data storage [Node.js]
document.getElementById('cryptologo').innerHTML="{" +"<img src='https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/128/color/"+ localStorage.getItem("symbol").toLowerCase() + ".png' width='8%'>"+"}"
var AverageCrypto = localStorage.getItem("askPrice");
var ExecutedCrypto = localStorage.getItem("executed");
var ExecutedCryptoSaving = localStorage.getItem("executedSaving");
var TotalCrypto = localStorage.getItem("Total");
var ocoPercent = localStorage.getItem("ocoPercent");



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



document.getElementById('res3').innerHTML=average.toFixed(0);
// document.getElementById('res2').innerHTML=executed;
document.getElementById('res2').innerHTML=Number(ExecutedCryptoSaving).toFixed(4);
document.getElementById('res').innerHTML=total.toFixed(1);


///////////ดึง API ราคา Real time
const getBtcData = async () => {
	fetch("https://api.binance.com/api/v1/ticker/24hr?symbol=" + (localStorage.getItem("symbol")).toUpperCase() + "BUSD")
   .then(response => response.json())
   .then(data => {
	lastPrice = Number(data.askPrice)

		// แสดงผลราคาคริปโต Real-time
		document.getElementById("info").innerHTML = (lastPrice).toFixed(0)
		resnowday = lastPrice*ExecutedCryptoSaving
		realproF = (Number(resnowday-total)).toFixed(1)
		 document.getElementById('resnowday').innerHTML= "<b>" + resnowday.toFixed(1); + "</b>"

	RealTimeProfit = (((lastPrice - average)*ExecutedCryptoSaving) - (((lastPrice - average)*ExecutedCryptoSaving)*fee)).toFixed(2);
	// ปุ่มพากันหาย
if (average === 0 && total === 0){
	document.getElementById('ssbutton').style.display = 'none';
} else if (realproF < 10){
	document.getElementById('bbbutton').style.display = 'none';
} else {
	document.getElementById('bbbutton').style.display = 'none';
	document.getElementById('ssbutton').style.display = 'none';
}

		if (realproF > 10) {
		document.getElementById("showgif").innerHTML= "<img src='img/money.gif' width='25%'>"
} else if (realproF < 10) {
	document.getElementById("showgif").innerHTML= "<img src='img/sell.gif' width='20%'>"
} else {
	document.getElementById("showgif").innerHTML= ""
}
if (realproF >= 0) {
		document.title = "✔ฟันกำไร:-- " + ((RealTimeProfit*100)/total).toFixed(2) + "% --";
}
else if (realproF  < 0) {
	document.title = "❌ขาดทุน:-- " + ((RealTimeProfit*100)/total).toFixed(2) + "% --";
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
	   	   if (realproF * lastPrice > 0) {
    document.getElementById("realproF").style.color = '#1FD715';
			}
			else {
    document.getElementById("realproF").style.color = '#FA2727';
			}




   })}


   getBtcData();
   tcount=setInterval(function(){
  tcount++
  if (tcount==6) {getBtcData(); tcount=0}
},600);