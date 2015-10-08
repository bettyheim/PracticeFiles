$(function() {

	$('button').on('click', function() {
		var $li = $('<li>');
		$li.on('click', function() {
			$(this).toggleClass('on');
		});
		$('ul').append($li);
	})
	$('input').on('click', function() {

		var number = $('li.on').length;
		console.log(number);

	});

})