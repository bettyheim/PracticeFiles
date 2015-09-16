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
	<?php include("footer.php"); ?>
</body>
</html>



