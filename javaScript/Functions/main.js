var x = 5;

var myFunction = function(foo) {
	foo = foo + 60;
	console.log(foo);
}

myFunction(x);

console.log(x);



var addOne = function(number) {
	number++;
	console.log();
}

addOne(5);


//fn = mix ingredients
//fn = cook



function bakeCake(ingredients, ding) {
	var ingredientList = ['flour', 'water', 'yeast', 'sugar', 'vanilla', 'egg', 'oil'];
	var message = 'Hello, your cake is done. Get it out of the oven NOW!';

	ingredients(ingredientList);
	ding(message);
}

var mixIngredients = function(mix){
	console.log('mix together ' + mix + ' in a bowl. Pour in cake pans and put in pre-heated oven');
}

var done = function(itsdone) {
	console.log(itsdone);
}

bakeCake(mixIngredients, done)