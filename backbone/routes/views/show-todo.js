
var app = app || {}


app.ShowTodo = Backbone.View.extend({
	el: 'main',

	template: Handlebars.compile($('#show-todo').html()),


	render: function (id) {
		var _this = this
		var model = new app.Todo({ id: id })

		model.fetch()
			.then(function () {
				_this.$el.html(_this.template(model.toJSON()))
			})
			.fail(function () {
				console.log('Couldn\'t get todo')
			})

	}

})