function wakeup() {
console.log('Get up!');
}

function shower() {
	console.log('Take a shower, you stink');
}

function brushTeeth() {
	console.log('Brush Teeth');
}

function dailyRoutine(name) {
	console.log('Good Morning ' + name);
}

var people = ['John', 'Ringo', 'Paul'];

function ghettoBird(names) {
	wakeup();
	shower();
	brushTeeth();

	names.forEach(dailyRoutine);
}

ghettoBird(people);