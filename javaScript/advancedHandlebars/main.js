$(function () {

	var tmpl = $('#hello').text();
	var helloTmpl = Handlebars.compile(tmpl);

	var tmpl2 = $('#students').text();
	var studentsTmpl = Handlebars.compile(tmpl2);

	$('main').append(helloTmpl({
		name: 'Kevin',
		title: 'instructor',
		company: 'Rockit Bootcamp',
		studentsHtml: studentsTmpl({
			students: [
				{
					name: 'Adam',
					hair: 'black',
					gender: 'male'
				}, 
				{
					name: 'Mike',
					hair: 'brown',
					gender: 'male'
				}, 
				{
					name: 'Crystal',
					hair: 'brown',
					gender: 'female'
				}, 
				{
					name: 'Rob',
					hair: 'brown',
					gender: 'male'
				}, 
				{
					name: 'Hector',
					hair: 'brown',
					gender: 'male'
				}
			]
		})
	}))
})