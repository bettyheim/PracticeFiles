//function study
//function go to class
//greet classmates
//


function study() {
	console.log('study prework for tomorrow\'s class')
}
function goToClass() {
	console.log('go to class')
}

var classmates = ['Bryan', 'Hector', 'Harlan', 'Mike', 'Nick', 'Crystal', 'Adam', 'Keith', 'Rob', 'Andrew'];

function greet(name) {
	console.log('Good Morning ' + name + '!')
}

function schoolDay(classNames) {
	study();
	goToClass();

	classNames.forEach(greet);
}

schoolDay(classmates);

var baz = true;

console.log(baz += 1);
console.log(baz += false);

console.log(1 / 0);
