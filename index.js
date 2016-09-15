const request = require('request');
const config = require('./config');

const options = { 
	url: 'https://api.github.com/graphql', 
	headers: { 
		'User-Agent': 'gh-graphql', 
		'bearer': config.bearer
	}
}

request.get(options, (err, res, body) => {
	if(err) console.log(err);
	console.log(res.body);
});