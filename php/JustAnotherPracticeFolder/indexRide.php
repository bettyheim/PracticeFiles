<?php
// small car
//pickup truck
//bike
//bus

$ownAVehicle = true;
$schoolClose = true;
$offRoading = true;

if ($ownAVehicle) {
	if ($offRoading) {
		echo 'Buy a truck';
	}else {
		echo 'Buy a car';
	}
} else if ($schoolClose) {
		echo 'Ride my bike';
} else {
		echo 'Ride the bus';
}