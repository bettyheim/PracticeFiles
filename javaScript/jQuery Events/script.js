// $('input').on('keypress', function (event) {
// 	console.log('button being pressed:', event.keyCode)
// });


$('input').on('focus', function (event) {
	console.log('input was focused:')
});

$('input').on('blur', function (event) {
	console.log('input was blurred:')
});

$('form').on('submit', function () {
	console.log('form was submitted')
	var answer = $('input').val();
	console.log(answer);
	return false;
})


$('a').on('click', function (event) {
	console.log(this);
	return false;
})
















