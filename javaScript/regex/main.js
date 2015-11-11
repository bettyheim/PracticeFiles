$(function () {

	$('form').on('submit', function () {
		var text = $(this).find('input').val();


		// ^ matches at the beginning of the line
		// $ matches at the end of the line
		// . any character at all
		// * 0-infinity of the thing directly to the left
		// + Will match at minimum one or more
		// ? 0 or 1 matches
		// [] are a character set. it includes one instance of a character that is within the brackets unless a quantifier is to the right of it.
		// \w matches a-z A-Z 0-9 _
		// \d matches a single number
		//{} {n} {n,} {n,m} matches the number of items to the left of it. If a comma is added without another number after it, it can match from the first number to infinity. If a second number is added it will match that range (number of times)
		// A capitol \W or \D means it cannot be a word or digit character.
		// () perens group things together as one instance


		var re = /^http:\/\/\w+[.][c][o]m$/;

		if (re.test(text)) {
			alert('It matches!')
		} else {
			alert('NOOOOOOO!')
		}

		return false;
	});




});