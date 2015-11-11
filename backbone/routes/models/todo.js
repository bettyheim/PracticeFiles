var app = app || {}

app.Todo = Backbone.Model.extend({
	urlRoot: 'http://jsonplaceholder.typicode.com/todos',
	defaults: {
		title: null,
		completed: false,
		userId: null
	}
})

