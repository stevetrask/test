const algoliasearch = require('algoliasearch');

const { ALGOLIA_KEY } = process.env;

exports.handler = (event, context, callback) => {
  // Here we'll use Algolia to get upload
  var client = algoliasearch('LY61NP6ZYV', ALGOLIA_KEY);
	var index = client.initIndex('dev_f2');
	var contentJSON = require('/resources.json');

	index.addObjects(contentJSON, function(err, content) {
	  if (err) {
	    console.error(err);
	    callback(err);
	  }
	});
};