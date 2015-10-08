<?php

$hungry = $_GET['hungry'];
$lazy = $_GET['lazy'];

if ($hungry && $lazy) {
	if ($lazy) {
		echo 'eat cereal';
	} else {
		echo 'eat bacon and eggs';
	}
} else {
		echo 'eat nothing';		
}


