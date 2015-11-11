//use photos getting the collection and displaying utilizing handlebars

var albumTempl = $('#album-template').text();
var createAlbum = Handlebars.compile(albumTempl);

var Photo = Backbone.Model.extend({
  defaults: {
    id: null,
    title: null,
    url: null,
    thumbnailUrl: null
  }
});

var Photos = Backbone.Collection.extend({
  model: Photo,
  url: 'http://jsonplaceholder.typicode.com/photos?_start=0&_end=48'
});

var photos = new Photos();

photos.fetch()
  .then(function (data) {
    console.log(createAlbum(data))
    $('main').append(createAlbum(data))
  })
  .fail(function () {
    (console.log('fail'))
  })



