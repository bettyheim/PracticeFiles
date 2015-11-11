$(function () {

	var divTmpl = $('#div-template').text(); // get the string

	console.log(divTmpl);

	var createDiv = Handlebars.compile(divTmpl); // compile with handlebars

	$('body').append(createDiv({ text: 'Hello World' }))

	console.log(createDiv({ text: 'Hello World' }));



	var greet = Handlebars.compile('Hello, {{blank}}')

	console.log(greet({ blank: 'Homer' }))

	var tmpl = $('#form-template').text();

	var greet2 = Handlebars.compile(tmpl);

	console.log(greet2({ name: 'Fluffy'}))



})

// get the string and then compile it with handlebars
// The template is created in the head inline script tag