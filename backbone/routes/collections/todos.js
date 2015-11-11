var app = app || {}

app.Todos = Backbone.Collection.extend({
	url: 'http://jsonplaceholder.typicode.com/todos',
	model: app.Todo

})
