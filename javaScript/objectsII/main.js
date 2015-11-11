$(function () {

var person = {
	name: 'Kevin',
	eyes: {
		color: 'hazel',
		shape: 'almond'
	},
	limbs: {
		number: 4,
		types: {
			arms: 2,
			legs: 2
		}
	},
	tattoos: 'true',
	height: '5-9',
	priors: 'too many to list',
	knownAliases: ['The Wizard', 'JS Wizard']
};

// console.log(person.name);
// console.log(person.eyes.color)
// console.log(person.limbs.types.arms)
// console.log(person.knownAliases[1])


var batmobile = {
	type: 'car',
	doors: 2,
	fuel: 10,
	crises: true,

	drive: function () {
		if (this.fuel > 1) {    // this is the parent object
			this.fuel -= 1;
			console.log('vroom vroom!');
		} else {
			console.log ('sputter - sorry, outta gas')
			this.gasUp()
		}
	},
	gasUp: function () {
		if (this.fuel < 10) {
			this.fuel = 10
			console.log ('full of gas')
		};
	},
	speed: ['faster', 'normal'],
	saveTheWorld: function () {
		var _this = this; // stores the current meaning of this in a variable
		if (this.crises) {
			console.log('off to save the day');
			console.log('go ' + this.speed[0]);
			setTimeout(function () {
				console.log('saved the world AGAIN!');
				console.log('set speed ' + _this.speed[1]);
				crises = false;
			}, 4000)
		};
	}
};

batmobile.drive();
batmobile.saveTheWorld();
batmobile.drive();
batmobile.drive();
batmobile.drive();
batmobile.drive();
batmobile.drive();
batmobile.drive();
batmobile.drive();
batmobile.drive();
batmobile.drive();
batmobile.drive();
batmobile.drive();
batmobile.drive();



})