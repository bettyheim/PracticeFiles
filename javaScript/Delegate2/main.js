$(function () {

	$('button').on('click', function () {
		$('ul').append('<li>Click me, too!</li>')
	})

	$('#list').on('click', 'li', function () {
		console.log('click');
	});






});


<html>
	<body>
		<button></button>
		<ul id="list">
			<li><a href="#"></a></li>
			<li><a href="#"></a></li>

		</ul>
	</body>
</html>