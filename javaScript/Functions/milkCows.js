var milkCow = function(name) {
	console.log('Milk the cow ' + name + '');
}

function milkCows(cowNames) {
	getDressed();
	getBucket();
	cowNames.forEach(milkCow);
}
var cows = ['Sally', 'Betsy', 'Bell']
var getBucket = function() {
	console.log('Get a bucket');
}
var getDressed = function() {
	console.log('Get dressed!');
}

var goToChurch = function() {
	getDressed();
	console.log('Amen!')
}


milkCows(cows);
goToChurch();


//fn = mix ingredients
//fn = cook

function bakeCake(ingredients, ding) {
	ingredientList = ['flour', 'water', 'yeast', 'sugar', 'vanilla', 'egg', 'oil'];
	message = 'Hello, your cake is done. Get it out of the oven NOW!'

	ingredients(ingredientList);
	ding();
}

var mixIngredients = function(mix){
	console.log('mix together ' + ingredintList + ' in a bowl. Pour in cake pans and put in pre-heated oven');
}
var done = function(itsdone) {
	console.log(message);
}

bakeCake(mixIngredients, done)
