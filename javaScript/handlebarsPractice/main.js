$(function () {





// console.log('hello')

// var string = 'My name is var1, My dog\'s name is var2';

// var string2 = string.replace('var1', 'Betty')

// var string3 = string2.replace('var2', 'Ellie')

// console.log(string3);

// var greet = {
// 	blank: 'Homer',
// 	dogName: 'Ellie'
// }

var templ = $('#div-template').text();
var createtemp = Handlebars.compile(templ);

var content = createtemp({ noun: 'house', adjective: 'greesy'});

$('body').append(content)


// var greet = Handlebars.compile('Hello, {{blank}}, my dog\'s name is {{dogName}}');

// 	console.log(greet({ blank: 'Homer', dogName: 'Ellie' }));




// $('button').on('click', function(){

// 	var name = $('input').val();

// 	$('body').append('Hello ' + name);
// 	return false;
	
// })





})