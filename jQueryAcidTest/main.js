$(function () {

	var users = [
	    {
	      "id": 1,
	      "name": "Rob"
	    },
	    {
	      "id": 2,
	      "name": "Betty"
	    },
	    {
	      "id": 3,
	      "name": "Andrew"
	    },
	    {
	      "id": 4,
	      "name": "Kevin"
	    }
	  ];

	var renderUser = function (user) {
			var userTmpl = $('#user-template').text();
			var createUser = Handlebars.compile(userTmpl);
			return createUser({
				id: user.id,
				userName: user.name
			});
		};

	var user = users.forEach(function (user) {
		$('.user-list').append(renderUser(user));
	});

	$('.user-list').on('click', '.rem-button', function () {
		userId = $(this).parents('.media-object').data('id');
		var $this = $(this);

		var result = _.find(users, {id: userId})

		console.log(result.name);

		$this.parents('.media-object').remove()

	});

})