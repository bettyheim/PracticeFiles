function add(n, m) {
	return n + m;
}

function subtract(n, m) {
	return n - m;
}

function multiply(n, m) {
	return n * m;
}

function square(n) {
	return multiply(n, n);
}


module.exports = {
	add: add,
	multiply: multiply,
	subtract: subtract,
	square: square
}
