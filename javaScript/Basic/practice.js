

// explicit coercion

// var x = '5';
// var y = 8;

// console.log(parseInt(x, 10) + y);

// console.log(String(1));
// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Number(true));

// var a = 5; //number
// var b = '5';//string
// var c = 5.2; //number
// var d = false; //Boolean
// var e = 'false'; //string
// var f = null; //null NO>>>> object
// var g = 'null'; //string
// var h = 'one'; + 2 //string
// var i = +'42'; // number

// console.log(typeof f);

// console.log(5 + '7'); //57
// console.log(5 + + '7'); //12
// console.log('' + 5 + 7); // 57
// console.log(false + '7'); //false7
// console.log(Number(true) + 7); //8



console.log('hello world'); 

var a = 5 + '7'; // 57 converts 5 to a number
console.log(a);

var b = 5 + + '7'; // 12 because the string of 7 is being converted to a number and then added to 5.
console.log(b);

var c = '' + 5 + 7; // 57 the numbers are being coerced into a string.
console.log(c);

var d = false + '7'; // false7 because it coerces false to be a string
console.log (d);

var e = Number(true) + 7; //8 
console.log(e);

var welcome = 'Welcome ';
welcome + 5;

console.log(welcome);


var x = !5; //the variable x = false

var y = !true; //false

var z = !!false; //false

var zz = !!y; 

var yy = (Boolean(zz));






