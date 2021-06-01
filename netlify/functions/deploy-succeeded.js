const algoliasearch = require('algoliasearch');

exports.handler = (event, context, callback) => {
  // Here we'll use Algolia to get upload
  var client = algoliasearch('LY61NP6ZYV', '553fbe19fdd15da818acb34b3674973f');
	var index = client.initIndex('dev_f2');
	var contentJSON = require('asset/content.json');

	index.addObjects(contentJSON, function(err, content) {
	  if (err) {
	    console.error(err);
	    callback(err);
	  }
	});
};