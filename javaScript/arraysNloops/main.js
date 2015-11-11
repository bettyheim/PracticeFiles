
var arr = ['Joe', 'Garrard'];
console.log(arr);

arr[2] = 'Bob';//don't use this method

arr.push('Bob');

console.log(arr);

console.log(arr[1]);

console.log(arr.length);

console.log(arr.join()) // creates a string out of the array values.

console.log(arr.join(' '))// uses a single space as a seperator.

console.log(arr.pop()); //gives you the value to use and removes it from the array.

console.log(arr);

console.log(arr.unshift()); // adds to the front and returns a number

console.log(arr.push(1, 2, 3, 4, 5)); //returns a number
console.log()

console.log(arr.shift()) //removes the first value and returns the value.

console.log(arr.unshift('Lucy'));

console.log(arr.indexOf('Lucy')); // Checking to see if something exists.

// -1 means not found for indexOf

if(arr.indexOf('Lucy') !== -1){
	console.log('I found Lucy!');
}


console.log(arr.slice(0));

console.log(arr.slice(0,2)); // only displays items 0, and 1
//push, pop, shift, unshift change (mutate) the array.
//slice does not mutate the array

console.log(arr.splice(1)) //mutates the array and removes everything after position 0

console.log(arr.splice(1,2)); //splice has a start index and total number gotten. This changes the array by removing the items.

console.log(arr.push('Mary', 'Joe', 'Tim'));

console.log(arr);

console.log(arr.splice(2, 1, 'John')) //Removing item at position 2 and adding John at position 2.

console.log(arr.splice(2, 1, 'John', 'Paul'));//Remove item at position 2 (can be placed in a variable), add the new items.

// var newArr = ['Hank', 'Fred', 'Thomas', 'Peter', 'Cindy'];
// arr = arr.concat(newArr);

console.log(arr);

arr.forEach(function (elem, idx, arr) {
	console.log(elem, idx);
});

var len = arr.length;

while (len--) {
	console.log(arr[len]); // returns the values in opposite order
}

var i = 0;

while (i < arr.length){
	console.log(arr[i++]) //returns in ascending order.
}
// always use a variable for length.

console.log(arr)
for (var i = 0; i < arr.length; i++){

	if (arr[i] === 'Mary') { //skip current iteration and continue on.
		continue;
	}

	if (arr[i] === 'Paul') { //break completely exits
		break;
	}

	console.log(arr[i]);

}

var obj = {
	foo: 'bar',
	day: 1,
	job: 'false',
	state: 'Kanses',
	hair: 'Band',
	number: 783,
	livestock: 'cows',
	dog: 'Sally'
}

//objects are like unordered list.

for (var property in obj) {
	console.log(property, obj[property])
}



































