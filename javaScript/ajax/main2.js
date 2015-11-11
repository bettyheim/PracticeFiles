// ajax is the method for transferring data between the client and the server.

$(function () {

	var root = 'http://jsonplaceholder.typicode.com';

// promise and then promise method

	// $.ajax({
	//   url: root + '/todos/17',
	//   method: 'PUT',
	//   // success: function () { //depricated Don't use this
	//   // }

 //    data: {
	//     title: "Hello Wprld",
 //  	}

	  // data: {
	  //   userId: 1,
	  //   title: "I like ham and eggs",
	  //   completed: true
	  // }

	// })

//promise method

//should always use then and fail

// 	  .then(function(data) {
// 	    console.log(data);
// 	  })
// 	  .fail(function () {
// 	  	console.log('didn\'t work')
// 	  })
// 	  .always(function () {
// 	  	console.log('log this no matter what!')
// 	  })

// 	$.get(root + '/todos')
// 		.then(function (data) {
// 			var i = 0
// 			while(i < data.length) {
// 				console.log(data[i].title)
// 				i++;
// 			}
// 		})
// 		.fail(function () {
// 			console.log('oops')
// 		})

// 		$.post(root + '/comments', {
// 			postId: 1,
// 			name: 'hoe smo joe',
// 			email: 'smo@smo.com',
// 			body: 'Hello world'
// 		})
// 		  .then(function (data) {
// 		  	console.log(data);
// 		  })xhr
// 		   .fail(function () {
// 		   		console.log('fail', xhr.status)
// 		   })


// 		 $.getJSON



// })

//pick a dataset, make a template and insert the info into the body of the html.