let resetTweets = () => {
	$.get('/api/tweets', (tweets) => {

		let tweetsContainer = $('#tweets');
		tweetsContainer.html('');

		console.log(tweets);

		tweets.forEach((tweet) => {
			// console.log('tweet', tweet);
			tweetsContainer
			.append("<div class='tweet'>"+tweet.message+"<br/> -"+tweet.user+"</div>");
		});

	});
}

let saveTweet = () => {
	$.post('/api/tweets', {
		message: $('#msg').val(),
		user: $('#user').val()
	}, () => {
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