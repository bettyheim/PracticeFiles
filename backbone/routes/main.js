var app = app || {}

//line 3-history are needed for an app

;(function () {

	var Router = Backbone.Router.extend({
		routes: {
			'todos(/)': 'showTodos', // perense mean optional
			'todos/:id(/)': 'showTodo',
			'todos/:id/edit(/)': 'editTodo',
			'todos/:id/remove': 'removeTodo',
			'*default': 'defaultRoute' //always last... unless you want everythng below it to not work.
		},

		showTodos: function () {
			console.log('Todos')
			var view = new app.ShowTodos

			view.render()
		},

		showTodo: function (id) {
			var view = new app.ShowTodo

			view.render(id)
		},

		editTodo: function (id) {
			console.log('edit user number ' + id)
		},

		removeTodo: function (id) {
			console.log('all gone')
		},

		defaultRoute: function () {
			console.log('oops something went wrong!')
			$('main').html('<h1>404 - Not Found</h1>')
		}
	});


	app.router = new Router;

	// app.router.on('route:showTodos', function () {
	// 	console.log('list todos')
	// })

	Backbone.history.start();

}())
