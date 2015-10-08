$(function () {
	// The template
	// <li><a href="{{link}}">{{text}}</a></li>

	var liTmpl = $('#li-template').text();

	var createLi = Handlebars.compile(liTmpl);

		// $('body').append(createDiv({ text: 'Hello World' }))
			// console.log(createDiv({ text: 'Hello World' }));
	


	$('body').append(createLi({ link: 'http://www.google.com', text: 'Go to Google'} ))

})