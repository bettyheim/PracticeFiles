$(function () {

var arr = [1, 2, 'blah', false, ['beep', 'boop']]

console.log(arr[2])
console.log(arr[4][1])

var students = ['Andrew', 'Crystal', 'Mike']
console.log(students);

students.push('Hector');

students.push('Adam', 'Betty', 'Nick')
console.log(students);

students.push(['Kevin', 'Brad'])
console.log(students);

var students2 = students.concat('Rob');
console.log(students2)

var students2 = students.concat(['Rob']);
console.log(students2)

arr[2] = 'foo';
console.log(arr);


students.pop();
console.log(students);

console.log(students.shift());

var size = students.unshift('Andrew')
console.log(size)





})