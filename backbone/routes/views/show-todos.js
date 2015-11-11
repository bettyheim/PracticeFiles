
var app = app || {
	currentView: new (Backbone.View.extend({}))
}

app.ShowTodos = Backbone.View.extend({
	el: 'main',

	collection: new app.Todos,
	template: Handlebars.compile($('#show-todos').html()),

	events: {
		'click li': 'clickli'
	},

	clickli: function (event) {
		var $target = $(event.currentTarget)
		console.log($target.text())
		event.preventDefault()
		return false
	},

	render: function () {
		var _this = this

		this.collection.fetch()
			.then(function () {
				_this.$el.html(_this.template(_this.collection.toJSON()))
			})
			.fail(function () {
				_this.$el.html('<h1>Failed to get todos</h1>')
			})

		this.$el.html('<h1>Hello world</h1>')
	}

})