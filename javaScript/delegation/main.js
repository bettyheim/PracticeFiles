$(function() {

	var i = 0;

	$('button').on('click', function() {
		var $li = $('<li class="foo">foo<span>' + i++ + '</span><section>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta iure sed beatae,</section><div><button>Remove</button></div></li>');
		console.log('hello')

		$li.prependTo('ul');

	})

	$('ul').on('click', '.foo:first-child', function() {
		var parent = $(this).parent();
		console.log(parent);


		console.log($(this).text() + ' <li> was clicked')


	})

	$('ul').on('click', 'button', function() {
		$(this) //button
		.parents('li') //li
		.find('span') //span
		.add('section') //span, section
		.remove() //span
	})


})