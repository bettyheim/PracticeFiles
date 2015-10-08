$(function () {

	var divTmpl = $('#div-template').text(); // get the string

	console.log(divTmpl);

	var createDiv = Handlebars.compile(divTmpl); // compile with handlebars

	$('body').append(createDiv({ text: 'Hello World' }))

	console.log(createDiv({ text: 'Hello World' }));



})

// get the string and then compile it with handlebars
// The template is created in the head inline script tag