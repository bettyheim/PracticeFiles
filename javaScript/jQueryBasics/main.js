
$(function(){

	console.log("hello");

	var poem = $('p.poem').html();
	var poemTest = $('p.poem').text();
	var title = $("select.title").val();
	var fnVal = $('input.fn').val();
	var ageVal = $('input.age').val();
	var genderAtt = $('input.sex').attr('value');
	$('div.name').append('Betty');
	$('li.saying').append("isn't it");
	$('<i>er</i>').appendTo('.greeting');
	$('<b>pie</b>').appendTo('p.food');




	console.log(poem);
	console.log(poemTest);
	console.log(title);
	console.log(fnVal);
	console.log(ageVal);
	console.log(genderAtt); 



	// jQuery('cssSelector').method();
	// $('cssSelector').method();


})