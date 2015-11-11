$(function () {

  var userTempl = $('#user-template').text();
  var createTemp = Handlebars.compile(userTempl);

  var root = 'http://localhost:3000';

  var User= Backbone.Model.extend({
    defaults: {
      id: null,
      name: null
    }
  });

  var Users = Backbone.Collection.extend({
    model: User,
    url: root + '/users/'
  });

  var users = new Users();

  var fetchUsers = users.fetch();

  // render: function()

  users.fetch()
    .then(function (data) {
      $('main').append(createTemp(data))

    })
    .fail(function () {
      (console.log('fail'));
    });

       // console.log(fetchUsers);

  $('main').on('click', '.rem-button', function () {
    var userId = $(this).parents('.media-object').data('id');
    console.log(userId);
    console.log(users.toJSON())

    var result = _.find(users.toJSON, {id: userId});


    console.log(result);
    $(this).parents('.media-object').remove();
  })

})
