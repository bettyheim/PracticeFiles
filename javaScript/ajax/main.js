$(function () {

var root = 'http://jsonplaceholder.typicode.com';

var userTmpl = $('#user-template').text();

var createTmp = Handlebars.compile(userTmpl);

$.get(root + '/users')
	.then(function (data) {
		// var i = 0;
		data.forEach(function () {
			$('body').append(createTmp({
				name: data[i].name,
				username: data[i].username,
				email: data[i].email
			}))
		})
	})

	// 	while(i < data.length) {

	// 		console.log(data[i].name)
	// 		i++;
	// 	}
	// })


})