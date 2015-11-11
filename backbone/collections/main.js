var Person = Backbone.Model.extend({
	defaults: {
		id: null,
		name: null,
		username: null,
		email: null
	},

	urlRoot: 'http://jsonplaceholder.typicode.com/users'
});

var People = Backbone.Collection.extend({
	model: Person,
	listUsers: function () {
		return this.models.map(function (model) {
			return model.toJSON()
		})

	},
	url: 'http://jsonplaceholder.typicode.com/users'


});

console.log(new People([
	{
		name: 'Bob',
	},
	{
		name: 'Ed'
	}

]))
var people = new People([
	{
		name: 'Bob',
	},
	{
		name: 'Ed'
	}
])

console.log(people)

console.log(people.listUsers())

console.log(people.toJSON())

people.fetch()
	.then(function (users) {
		console.log(users)

		// people.create({
		// 	name: 'Joe'
		// }, {
		// 	success: function () {
		// 		console.log('created Joe')
		// 	}
		// })

	var person = new Person({
		name: 'Joe'
	})

	person.save().then(function () {
		console.log('saved')
		people.add(person)
	})

		// console.log(people)



	})

	.fail(function () {
		console.log('failed')
	})

people.add({
	name: 'Joe'
})

console.log()

