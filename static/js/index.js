let deleteTweets = (id) => {
	// console.log(id);
	$.ajax({
    url: '/api/tweets/'+id,
    type: 'DELETE',
    success: function(res) {
			// console.log(res);    
    }
	});


	resetTweets();
};

let resetTweets = () => {
	$.get('/api/tweets', (tweets) => {

		let tweetsContainer = $('#tweets');
		tweetsContainer.html('');

		// let buttons = [];

		tweets.forEach((tweet, i) => {
			// console.log(tweet);
			tweetsContainer
			.append("<div id='tweet"+i+"' class='tweet'>"+tweet.message+"<br/> -"+tweet.user+"<a id='delBtn"+i+"' class='delBtn'>X</a></div>");

			// buttons.push(i);
			let tweetId = '#tweet'+i;
			let tweetDiv = $(tweetId);
			let clickId = '#delBtn'+i;
			let delBtn = $(clickId);
			
			delBtn.click(function(){
				// console.log('clicked: '+tweet._id);
				deleteTweets(tweet._id);

			})

			tweetDiv.mouseenter(function(){
				let delBtnId = "#delBtn"+i;
				$(delBtnId).addClass('hover');	
			});

			tweetDiv.mouseleave(function(){
				let delBtnId = "#delBtn"+i;
				$(delBtnId).removeClass('hover');
			});
		});

		// buttons.forEach(function(num) {
		// 	let tweetId = '#tweet'+num;
		// 	let tweet = $(tweetId);
		// 	let clickId = '#delBtn'+num;
		// 	let delBtn = $(clickId);
			
		// 	delBtn.click(function(e){
		// 		console.log('clicked: '+num);
		// 	})

		// 	tweet.mouseenter(function(e){
		// 		// let event = e.target.id;
		// 		// let divNum = event.slice(5);
		// 		//let delBtn = "#delBtn"+divNum;
		// 		let delBtnId = "#delBtn"+num;

		// 		// console.log(delBtn);
		// 		$(delBtnId).addClass('hover');	
		// 	});

		// 	tweet.mouseleave(function(e){
		// 		let delBtnId = "#delBtn"+num;
		// 		$(delBtnId).removeClass('hover');
		// 	});
		// });

	});
}


let saveTweet = () => {
	let msg = $('#msg');
	let user = $('#user');
	$.post('/api/tweets', {
		message: msg.val(),
		user: user.val()
	}, () => {
		msg.val('');
		user.val('');
		resetTweets();
	});
}

$(window).ready(() => {
	resetTweets();

	$('#submitTweet').click(() => {
		console.log('submitTweet');
		saveTweet();
	});
});