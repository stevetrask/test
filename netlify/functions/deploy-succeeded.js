const algoliasearch = require('algoliasearch');

const { ALGOLIA_KEY } = process.env;

const contentJSON = [
  {
    "name": "Foo"
  }
];

exports.handler = (event, context, callback) => {
  // Here we'll use Algolia to get upload
  var client = algoliasearch('LY61NP6ZYV', ALGOLIA_KEY);
	var index = client.initIndex('dev_f2');
	var contentJSON = require('../../_site/assets/content.json');

	// var contentJSON = [
	//   {
	//   	"objectID": "1",
	//     "name": "Foo"
	//   }
	// ];
	
	index.clearObjects().then(() => {
  // clear done
	});
	index.saveObjects(contentJSON, function(err, content) {
	  if (err) {
	    console.error(err);
	    callback(err);
	  } else {
	  	callback(null, {
		    statusCode: 200,
		    body: 'Sucess for a better search!',
		  });
	  }
	});
};