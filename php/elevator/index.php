<?php

$personDir = 'up';
$personFloor = 7;
$elevatorDir = 'up';
$elevatorFloor = 6;


// If theyre going in opposite directions
if ($personDir != $elevatorDir) {
	echo 'No, it\'s going the wrong way.';
// If theyre going in the same direction
} else {
	if ($elevatorFloor == $personFloor) {
		echo 'Yes, pick me up';
	} else if ($elevatorFloor < $personFloor) {
		if ($elevatorDir == 'up'){
			echo 'Yes, pick me up';
		} else {
		 	echo 'No, it\'s already passed.';
		}
	} else {
		if ($elevatorDir == 'down') {
			echo 'Yes, pick me up';
		} else {
			echo 'No, it\'s already passed.';
		}
	}
}