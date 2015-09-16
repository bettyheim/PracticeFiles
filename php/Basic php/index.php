<?php
//this is a comment
/*This
  is
  a multiline
  comment
  */
  	include "numbers.php";
  	$empty = "six";
	$x = 5;
	$y = 3;
	$z = 20;
	$under_score = 10.5;
	$hello = "Hello World!";
	$string = 'This is a string';
	$string2 = 'I can\'t escape!';
	echo $string. " ".$string2;
	echo "<p>".$empty."</p>";


?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<h1><?php echo $hello; ?></h1>
	<div>
		<?php echo ($x + $three);?>
	</div>
	<div>
		<?php echo " 5 + 5 = " . $x += $x; 
		 echo "<br>" . "10 * 3 = " . $x *= 3;
		 echo "<br>" . $x . " / " . $y . " = " . $x /= $y; 
		 echo "<br>" . $x . " % " . $y . " = ". $x %= $y;
		 echo "<br>" . $z . " - " . $two . " = ". $z -= $two;
		 
		 ?>


	</div>
	<?php include("footer.php"); ?>
</body>
</html>



