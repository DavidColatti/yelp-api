const yelp = require('yelp-fusion');
const keys = require('./config/keys');

const apiKey = keys.apiKey;

const searchRequest = {
	term: 'Four Barrel Coffee',
	location: 'san francisco, ca'
};

const client = yelp.client(apiKey);

client
	.search(searchRequest)
	.then((response) => {
		const firstResult = response.jsonBody.businesses[0];
		const prettyJson = JSON.stringify(firstResult, null, 4);
		console.log(prettyJson);
	})
	.catch((e) => {
		console.log(e);
	});
