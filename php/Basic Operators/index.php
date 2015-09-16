<?php

$sum = 5 + 6; // addition operator
$mult = 3 * 3; // multiplication operator
$sub = 7 - 2; // subtraction operator
$div = 6 / 2; // division operator
$mod = 5 % 2; // modulus operator
//$exp = 3 * * 3; //Exponential operator

//perenthises create groups, groups define order of operations
$x = 6 * (3 % 2);
$y = (5*(4 + 9) - $x) / 2;

//string concat
$string = "Hello" . " World"; // dot means to concatenate

$dblBang = "!!!";
$excited = $string . $dblBang;

echo $excited;

// assignment modifiers
$y += 3; // add and assign
$y = $y + 3; // the hard way
$x -= 2;

$excited .="!!!";