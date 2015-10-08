// console.log('hello');

function buyMilk(callback) {
	console.log('Bought some milk')
	callback('buying some milk');
}

function callMeWhenDone(what) {
	console.log('I\'m done!' + what)
}

buyMilk(callMeWhenDone);


function getUsersFromDb(callback) {
	//......get users
	var users = ['Bob', 'Joe', 'T-bone'];
	callback(users);
}


getUsersFromDb(function(myUsers) {console.log('users:', myUsers)});


function whatsForDinner(decide) {
	var food = 'Pizza';
	decide(food);
}

whatsForDinner(function(typeOfFood) {
	console.log('I want', typeOfFood ,'for Dinner');
})





function getAddress(findAddress){
	var street = '1234 E. Camelback Way';
	findAddress(street);
}

getAddress(function(where) {
	console.log('Your street address is', where)
});




function goToSchool(whatSchool){
	var school = 'RockIT Bootcamp';
	whatSchool(school);
}

goToSchool(function(whereShouldIGo) {
		console.log('I should go to', whereShouldIGo);
});


function orderPizza(toppings, callback) {
	// cook a pizza
	setTimeout(function(){
		callback('Pizza with ' + toppings);
}, 6000);
}

orderPizza('pepperoni and anchovies', function(myPizza) {
	console.log('Hey guys, the ' + myPizza + ' is here!')
})

//setTimeout has an arity of two.
setTimeout(function(){console.log('3 seconds have passed');}, 3000);

// similar to setTimeout, but you should not use setInterval
// setInterval()





var x = function() {
	console.log('x');
}

var doSomething = function(cb) {
	cb();
	// console.log('doSomething');
}

doSomething(x);



