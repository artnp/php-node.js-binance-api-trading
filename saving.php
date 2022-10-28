<html>
<head><meta charset="utf-8"><title>เทรด Binance/</title>
<link rel="icon" type="image/png" href="img/binance-smart-chain-bnb-coin-4199868-3478989@0.png"/>
<script src="img/jquery.min.js"></script>
<link rel="stylesheet" href="index.css">
<style>a {
  color: hotpink;
}</style>
</head>
<body style="background-color:black;">
<script>
		if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href );
    }
localStorage.setItem("askPrice", "<?php $askPrice = fopen('scratch/askPrice','r');echo fgets($askPrice);fclose($askPrice);?>");
localStorage.setItem("executedSaving", "<?php $executed = fopen('scratch/executedSaving','r');echo fgets($executed);fclose($executed);?>");
localStorage.setItem("Total", "<?php $Total = fopen('scratch/Total','r');echo fgets($Total);fclose($Total);?>");
</script>
<center><a href="index.php">Real-Time trading</a>
<br>
<br><br><br>
<center>
<form action="" method="POST">
	  <table><tbody ><tr><td>ราคา </td><td><center><table>
		<td></td>
	<td height="30"><center>|<br><div id='cryptologo'></div>

		<table>
<tbody>
<tr><div id='info'>
</tr>
</tbody>
</table>
		</center>
	</td>
	<td></td>
<tbody ><tr>

</tr></tbody></table></center> 
		<td width="20%"><table style="background-color: #1D1D1D"><td><div id='res12'></div></td></table></td><td></td></tr><tr><td></td>	

 <center>   <table ><thead>
	  <tr style="background-color: #5A5050">

		<th><font size="2">เก็บช่วง</font></th>		
		<th><font size="2">Bitcoin</font></th>
		<th><font size="2">เงินต้น</font></th>
		<th><font size="2">ตอนนี้มี</font></th>
	  </tr></thead><tbody>
	   <tr style="background-color: #1D1D1D">

		 <td><font color="pink"><u><div id='res3' style='user-select: all; cursor: pointer;'></div></u></font></td>		
		 <td><font color="violet"><u><div id='res2' style='user-select: all; cursor: pointer;'></div></u></font></td>
		 <td><font color="yellow"><u><div id='res' style='user-select: all; cursor: pointer;'></div></u></font></td>
		 <td><font color="white"><u><div id='resnowday' style='user-select: all; cursor: pointer;'></div></u></font></td>
		 </tr></tbody></table>
		</center>
		<center>
<hr><!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container">
  <div class="tradingview-widget-container__widget"></div> <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-tickers.js" async>
  {
  "symbols": [
      {
      "description": "",
      "proName": "CAPITALCOM:DXY"
    },
    {
      "description": "",
      "proName": "BINANCE:BTCBUSD"
    }
  ],
  "colorTheme": "dark",
  "isTransparent": true,
  "showSymbolLogo": true,
  "locale": "en"
}
  </script>
</div>
<!-- TradingView Widget END -->
		<table style="background-color: #1D1D1D"><td><center>กำไร<font size='10'><div id="realproF"></div></font></center>
		<div id="bbbutton"><center><input type="submit" name="buy" class="button-buy" value="ช้อนซื้อ🚀"/></center></div>
		<div id="ssbutton"><center><input type="submit" name="sellmarket" class="button-sellnow" value="💡 เทขาย"/></center></div>
	</td></table>
		
			<div id="showgif"></div>
		</center>

		<?php
   		if(array_key_exists('buy', $_POST)) {
			button1();
		}else if(array_key_exists('sellmarket', $_POST)) {
			button4();
		}
		function button1() {
			exec("node buy.js", $output); 
			echo implode("\n", $output);
			echo "<meta http-equiv='refresh' content='0'>";
		}function button4() {
			exec("node sellmarket.js", $output); 
			echo implode("\n", $output);
			echo "<meta http-equiv='refresh' content='0'>";
		}
		exec("node check-balance-saving.js", $output); 
		echo implode("\n", $output);
		?>
</form>
		
<script src="saving.js"></script>
</body>
</html>
