$(function () {


	

	

	$('form').on('submit', function () {
		var madlibTmpl = $('#easter-template').text();

	var input1 = $('#one').val();
	var input2 = $('#two').val();
	var input3 = $('#three').val();
	var input4 = $('#four').val();
	var input5 = $('#five').val();
	var input6 = $('#six').val();
	var input7 = $('#seven').val();
	var input8 = $('#eight').val();
	var input9 = $('#nine').val();
	var input10 = $('#ten').val();
	var input11 = $('#eleven').val();
	var input12 = $('#twelve').val();


	var createTmp = Handlebars.compile(madlibTmpl);

	var createAnswer = (createTmp({ 
		blank1: input1,
		blank2: input2,
		blank3: input3,
		blank4: input4,
		blank5: input5,
		blank6: input6,
		blank7: input7,
		blank8: input8,
		blank9: input9,
		blank10: input10,
		blank11: input11,
		blank12: input12
	}));

	$('body').append('<p>' + createAnswer + '</p>');
		return false;
	})

})	
