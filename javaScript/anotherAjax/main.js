// $.ajax returns a promise. It is NOT an array
// The .then method holds an array of the objects
// fail holds an xhr object


$(function () {

	var root = 'http://jsonplaceholder.typicode.com';
	// $.ajax({
	// 	url: root + '/posts/'
	// })
	// 	.then(function (data) {
	// 		console.log(data);
	// 	})
	// 	.fail(function (xhr) {
	// 		console.log('error occurred', xhr.status);
	// 	})
	// 	.always(function () {
	// 		console.log('I tried. I don\'t know if I was successful or not, but I did try');
	// 	})

	// 	$.ajax({
	// 		url: root + '/posts',
	// 		method: 'POST',
	// 		data: {
	// 			userId: 10,
	// 			title: 'Hello World',
	// 			body: 'I am just trying to fricking learn how to use ajax'
	// 		}
	// 	})
	// 		.then(function (data) {
	// 			console.log('post was successful')
	// 		})
	// 		.fail(function (xhr) {
	// 			console.log('SNAP, it failed!')
	// 		})

	// $.get(root + '/posts')
	// 	.then(function (users) {
	// 		console.log('users', users)
	// 	})
	// 	.fail(function (xhr) {
	// 		console.log(xhr.status)
	// 	})

	// $.post(root + '/todos', {
	// 	userId: 3,
	// 	title: 'Do stuff',
	// 	completed: true
	// })
	// 	.then(function (data) {
	// 		console.log('post was successful')
	// 	})
	// 	.fail(function (xhr) {
	// 		console.log('SNAP, it failed!')
	// 	})

	// $.getJSON()// most of the time not needed. Only needed if the defualt is set to JSON on the server.

	// var todoTmpl = Handlebars.compile($('#todo-template').html())
	var userTmpl = Handlebars.compile($('#user-template').html())
	var postTmpl = Handlebars.compile($('#post-template').html())



	// $.get(root + '/users')
	// 	.then(function (users) {
	// 		console.log(users)
	// 		users.forEach(function (user) {
	// 			console.log(user)
	// 			console.log(userTmpl(user))
	// 			var userHtml = userTmpl(user)
	// 			$('main').append(userHtml)
	// 		})
	// 	})
	// 	.fail(function () {

	// 	})

	// $.get(root + '/todos')
	// 	.then(function (todos) {
	// 		todos.forEach(function (todo) {
	// 			var todoHtml = todoTmpl(todo)
	// 			$('main').append(todoHtml)
	// 		})
	// 	})
	// 	.fail(function () {

	// 	})

	// Filter

	$.get(root + '/users')
		.then(function (users) {
			users.forEach(function (user) {
				$.get(root + '/users/' + user.id + '/posts')
					.then(function (userPosts) {
						userPosts.forEach(function (userPost) {
							userPost.name = user.name
							$('main').append(postTmpl(userPost))
						})
					})
			})
		})


})