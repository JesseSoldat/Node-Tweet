let resetTweets = () => {
	$.get('/api/tweets', (tweets) => {

		let tweetsContainer = $('#tweets');
		tweetsContainer.html('');

		console.log(tweets);

		tweets.forEach(function(tweet) {
			// console.log('tweet', tweet);
			tweetsContainer
			.append("<div class='tweet'>"+tweet.message+"<br/> -"+tweet.user+"</div>");
		});

	});
}

$(window).ready(() => {
	resetTweets();
});