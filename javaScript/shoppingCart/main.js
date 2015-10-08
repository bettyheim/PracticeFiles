$(function() {

 $('ul.inventory button').on('click', function() {
 		var text = $(this).parent('li').find('span').text();

 		var liTmpl = $('#div-template').text();

 		var createLi = Handlebars.compile(liTmpl);

 		// var $li = $('<li><span>' + $text + '</span><button>Remove</button></li>');
 		// $('.cart').append($li);


 		$('.cart').append(createLi({ text: text}))
 });
 
 $('ul.cart').on('click', 'button', function() {
 		$(this).parent().remove();
 });

});