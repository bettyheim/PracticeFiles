//document dot ready is a call back function
// A function is being passed to it and it is being told to 
//WAIT until the document is done loading.



$(document).ready(function() {

		// This appends text to our element
		// Append will also include html elements
		$('div').append('ending text');

		// This replaces any text with our string
		$('span').text('some text')

		// this replaces any html with html elements and text
		$('span').html('<div>some text</div>')


		

	
});


