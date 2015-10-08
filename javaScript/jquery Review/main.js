// The primary function of jQuery is DOM manipulation

// If you select something with jQuery that didn't exist, it gives you back a jQuery object that has a lenght of 0. It will always return a jQuery object.


var divs = $('div');

console.log(divs);

//createion mode (only when <*>)
var newDiv = $('<div>');

var fakeHtml = $('<blah>');

console.log(fakeHtml);

var h1 = $('h1')

console.log(h1);

//DOM that is created needs to have events that need to apply to those elements added to the created element. Any event that is part of the script before the DOM elements are created by the script will not recognize the element because it has run before the element is created.


function selectAllH1(){
	return $('h1')
}

console.log(selectAllH1())

$('button').on('click', function (event) {
	event.preventDefault
	var h2 = $('<h2>').text('words')

	// $('body').append$(h2)
	h2.appendTo('body')
	return false; //stopPropagation & preventDefault
})

// This will add an event to every h2 every time.
var h2 = $('<h2>').text('words')


$('h2').on('click', handleClicks)

h2.on('click', handleClicks)

// It doesn't matter if the object is creating a DOM element or selecting a DOM element, you can add any event to that object.



function handleClicks () {
	console.log('You clicked words')
}