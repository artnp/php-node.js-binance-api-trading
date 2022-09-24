<html>
<head><meta charset="utf-8"><title>เทรด Binance/</title>
<link rel="icon" type="image/png" href="img/binance-smart-chain-bnb-coin-4199868-3478989@0.png"/>
<script src="img/jquery.min.js"></script>
<link rel="stylesheet" href="index.css">
</head>
<body style="background-color:black;">
<script>
localStorage.setItem("priceprediction", "<?php $priceprediction = fopen('scratch/priceprediction','r');echo fgets($priceprediction);fclose($priceprediction);?>"); //ตรงนี้ node.js ทำนายราคา
localStorage.setItem("symbol", "<?php $symbol = fopen('scratch/symbol','r');echo fgets($symbol);fclose($symbol);?>");
localStorage.setItem("askPrice", "<?php $askPrice = fopen('scratch/askPrice','r');echo fgets($askPrice);fclose($askPrice);?>");
localStorage.setItem("executed", "<?php $executed = fopen('scratch/Executed','r');echo fgets($executed);fclose($executed);?>");
localStorage.setItem("Total", "<?php $Total = fopen('scratch/Total','r');echo fgets($Total);fclose($Total);?>");
localStorage.setItem("ocoPercent", "<?php $ocoPercent = fopen('scratch/ocoPercent','r');echo fgets($ocoPercent);fclose($ocoPercent);?>");
</script>



<br>
<br><br><br>
<br><br><br>
<center>
<form action="" method="POST">
	  <table><tbody ><tr><td>ราคา+ Bid : </td><td><center><table>
		<td></td>
	<td height="30"><center>|<br><div id='cryptologo'></div>

		<table>
<tbody>
<tr>
<td height="60"><center><div id="godeyescookie"></div><?php if(array_key_exists('updategodeye', $_POST)) {
			button10();
		} function button10() {
			exec("node coincodex.js"); set_time_limit(1000);} 
		?><input type="submit" name="updategodeye" class="button" value="อัพเดต" /><div id='godeyes'></div></center>
		</td>
</tr>
</tbody>
</table>
		</center>
	</td>
	<td></td>
<tbody ><tr>
<td ><center><font size="7">𓀠</font></center></td>
<td height="80" width="100%"><center><font size="7"><p id='info' style='user-select: all; cursor: pointer;'></p></font></center></td></td>
<td><center><font size="7">𓁉</font></center></td>
</tr></tbody></table></center> 
		<td width="20%"><table style="background-color: #1D1D1D"><td><font size='3'><div id="realproF"></div></font> <div id='res12'></div></td></table></td><td></td></tr><tr><td></td>	
		<td><div class="container"><div class="progressbar"></div></div></td><td><font size="1"> <div id="infoPercentage"></div></span></font></td></tr></tbody></table><hr>
<center><div id='externallinks'></div></center>
 <center>   <table ><thead>
	  <tr style="background-color: #5A5050">
		<th><font size="1">คู่เหรียญเทรด</font></th>
		<th><font size="1">Average</font></th>		
		<th><font size="1">Executed</font></th>
		<th><font size="1">Total</font></th>
	  </tr></thead><tbody>
	   <tr style="background-color: #1D1D1D">
		 <td><div id='res001'></div></td>
		 <td><font color="pink"><u><div id='res3' style='user-select: all; cursor: pointer;'></div></u></font></td>		 
		 <td><font color="violet"><u><div id='res2' style='user-select: all; cursor: pointer;'></div></u></font></td>
		 <td><font color="yellow"><u><div id='res' style='user-select: all; cursor: pointer;'></div></u></font></td>
		 </tr></tbody></table></center><center>
.......
<table><tbody><tr>
<td><center><br><input type="submit" name="buy" class="button-buy" value="BUY 🚀"/><br>↧<br><input type="submit" name="check-balance" class="button" value="CA$H"/></center></td>
<td>+ </td>
<td><center><br><input type="submit" name="sellnow" class="button-sellnow" value="💡 SELL"/> <br>↧<br><input type="submit" name="sellmarket" class="button" value="MARKET"/></center></td>
<td></td></tr><tr><td></td><td></td><td></td>
<td></td>
<td></td><td></td><td></td></tr></tbody></table></form>
<hr>
<table border='1' style="background-color: #393801;">
<tbody><tr><td>∵
   <?php
		if(array_key_exists('buy', $_POST)) {
			button1();
		}else if(array_key_exists('sellnow', $_POST)) {
			button3();
		}else if(array_key_exists('sellmarket', $_POST)) {
			button4();
		}else if(array_key_exists('check-balance', $_POST)) {
			button6();
		}
		function button1() {
			exec("node buy.js", $output); 
			echo implode("\n", $output);
			echo "<meta http-equiv='refresh' content='0'>";
		}function button3() {
			exec("node sellnow.js", $output); 
			echo implode("\n", $output);
			echo "<meta http-equiv='refresh' content='0'>";
		}function button4() {
			exec("node sellmarket.js", $output); 
			echo implode("\n", $output);
		}function button6() {
			exec("node check-balance.js", $output); 
			echo implode("\n", $output);
		}
		?>
			</td></tr></tbody></table><br>
		<div id="showgif"></div>
		</center>
     
<script src="index.js"></script>
</body>
</html>
