'use strict';

var $ = require('jquery');
var tmpl = require('../js/template');
var api = require('../js/api');

var number = 140;

var getUsers = api.getUsers();
var getTweets = api.getTweets();
var getReplies = api.getReplies();

var currentUser = {
  handle: '@bradwestfall',
  img: 'brad.png',
  id: 1
};


$(function () {

	// console.log(getUsers);
	// console.log(getTweets);
	// console.log(getReplies);

	getUsers.then(function (users) {
		api.processUsers(users)
	})

	// getTweets.then(function (tweets) {
	// 	api.processTweets(tweets)
	// })

	getReplies.then(function (replies) {
		api.processReplies(replies)
	})

	// console.log(users.userId)






	// tweets.forEach(function(tweet) {
	// 	console.log(tweet);
	// });

	// replies.forEach(function(reply) {
	// 	console.log(reply);
	// });

	// users.forEach(function(user) {
	// 	console.log(user);
	// });


	// api.processUsers(api.getUsers());
 // api.getReplies()
 // 	.then(function(replies) {
 // 		api.processReplies()
 // 	})





	// for(tweets.id in tweets) {
	// 	if ($(this).parent('header').length) {
	// 		$('.tweets').append(tmpl.renderThread(user, message));
	// 	} else {
	// 		$(this).parents('.replies').append(tmpl.renderTweet(user, message));
	// 	}
	// }

	$('#main').on('click', 'textarea', function () {
		$(this).parent('form').addClass('expand');
	});

	$('#tweets').on('click', '.tweet', function () {
		$(this).parent('.thread').addClass('expand');
	});

	$('#main').on('submit', 'form.compose', function () {
		var message = $(this).find('textarea').val();
		$(this).removeClass('expand');
		$(this).find('.count').text('140');
		$(this).find('textarea').val('');

		return false;
	});

	$('textarea').on('keyup', function () {
		$(this).parent().find('.count').text(--number)
	});


});

//create a new file api.js for the .get and .post events
//move the render methods to the themplate.js
// move the renderThread append method to the if else statement
// Store the promise .get in a variable.
// var getUsers = function ( {
// 	return $.get().fail()
// })

// function processUsers() {

// }


// var users = getUsers()
// getUsers().then(processUsers)


// function pretendReply() {
// 	var replyingToId = 2
// 	getUsers().then(function (replies) {
// 		replies.forEach(function (reply) {
// 			tweets.forEach(function (twee) {
// 					if (tweet.id === reply.tweet.Id) {

// 					}
// })
// 		})
// 	})
// }

//When exporting




//var arr = tweets =




// var filterCollectionById = function (tweet) {
// 	return tweets.filter(function (tweet){
// 		return tweet.id === tweetId
// 	})[0]

// })



// replies.forEach(function (reply) {
// 	var matchingTweet = filterTweetById(reply.tweetId)
// 	console.log(reply.tweetId, matchngTweet)
// })