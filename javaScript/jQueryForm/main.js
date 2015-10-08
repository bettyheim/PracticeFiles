// form
// any inputs you like
// any events you like
// use .css() .addClass() .removeClass()
// '#' + val + val + val


$('form').on('submit', function () {
	var name = $('input.name').val();
	var room = $('input.room').val();
	var drink = $('input[name=group]:checked').val();
	$('span').html(name + " your " + drink + " will be delivered to your room number "+ room + " shortly. Thank you for your order.")
	return false;
})
