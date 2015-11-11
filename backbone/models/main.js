// MVC  todoMVC.com make a todo app.
//  models are what says what your data should look like. It is the structure of the data.


//capitalization is a emulation of a constructor.


// var Backbone = require('backbone');

var Person = Backbone.Model.extend({
	gender: 'male',
	fullName: function () {
		return this.get('firstName') + '' + this.get('lastName')
	},
	defaults: {
		id: null,
		name: null,
		username: null,
		email: null
	},
	initialize: function () { //when a new instance is created run my function
		console.log('New user created')
	},
	urlRoot: 'http://jsonplaceholder.typicode.com/users'
});




// console.log(new Person ({
// 	name: 'Kevin',
// 	age: 36
// }));

var kevin = new Person;

// console.log (kevin.fullName());

// kevin.set('hair', 'purple');
kevin.set({
	hair: 'green',
	face: 'ugly'
})


var person = new Person({ id: 1 })
person.fetch();
console.log(person);
// console.log(kevin);
// console.log(kevin.get('hair'));


// var Dinner = Backbone.Model.extend({
// 	defaults: {
// 		meat: 'steak',
// 		starch: 'potato',
// 		vegetable1: 'tossed salad',
// 		vegetable2: null,
// 		desert: null
// 	}
// })









// function Model(attrs) {
// 	return {
// 		attributers: attrs || {},
// 		set: function (attr, value) {
// 			this.attributes[attr] = value
// 		},
// 		get: function (attr) {
// 			return this.attributes[attr]
// 		}
// 	}
// }

// var Person = new Model({
// 	name: 'Kevin',
// 	age: 36
// })

// console.log(Person);
// Person.set('age', 45);
// console.log(Person)

// console.log(new Dinner ({

// }))

