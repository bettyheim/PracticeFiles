function userDefied() {

}


var addThree = function(a, b, c) {
	return a + b + c;
}
console.log(addThree(3, 5, 8));


function greet() {
	console.log('Hello')
}

console.log(greet()); // calls the function and then logs the return value of the function. Since there is no return value, it returns undefined.

function greet2(name) {
	console.log('Hello ' + name)
}

greet2('John')

function add(a, b) {
	if (a && b) {
		return a + b;
	}
}

console.log(add(1, 2));
//use return
//write a function that divides 2 numbers
//write a function that gives the square of a number
//write a funcation that gives the cube of a number
// write a function that takes a base and exponent and returns the result.


function greeting(name) {
	return 'How\'s it going, ' + name + '?';
}

function divide (num1, num2) {
	return num1 / num2;
}

var square = function (num) {
	return num * num;
}

function cube(num) {
	return num * num * num;
}

function exp(base, exp) {
	return (base * base) * exp;
}
var greeting2 = function(name) {
	return 'What\'s up ' + name + '?'
}





