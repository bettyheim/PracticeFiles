<?php

$personDir = 'up';
$personFloor = 7;
$elevatorDir = 'up';
$elevatorFloor = 6;

if ($personDir == $elevatorDir) {
	if ($personFloor >= $elevatorFloor && $personDir == 'up') {
		echo 'pick up';
	} else if ($personDir == 'down'  && $personFloor <= $elevatorFloor) {
		echo 'pick up';
	} else {
		echo 'No, it\'s already passed.'
	}

}
else {
	echo 'No, it\'s going the wrong way';
}