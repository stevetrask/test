const algoliasearch = require('algoliasearch');

const { ALGOLIA_KEY } = process.env;

const contentJSON = [
  {
    "name": "Foo"
  }
];

exports.handler = (event, context, callback) => {
  // Here we'll use Algolia to get upload
  var client = algoliasearch('64LMXTN0XN', ALGOLIA_KEY);
	var index = client.initIndex('dev_site-content');
	var index_capabilities = client.initIndex('dev_capabilities');
	var index_tools = client.initIndex('dev_tooling_services');
	var contentJSON = require('../../_site/json/site-content.json');
	var contentJSON_capabilities = require('../../_site/json/capabilities.json');
	var contentJSON_tooling = require('../../_site/json/tools-services.json');

// Test content
	// var contentJSON = [
	//   {
	//   	"objectID": "1",
	//     "name": "Foo"
	//   }
	// ];

	// Site content
	index.clearObjects().then(() => {
  // clear done
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
	});
	// Capabilities
	index_capabilities.clearObjects().then(() => {
  // clear done
	  index_capabilities.saveObjects(contentJSON_capabilities, function(err, content) {
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
	});
	// Tooling
	index_tools.clearObjects().then(() => {
  // clear done
	  index_tools.saveObjects(contentJSON_tooling, function(err, content) {
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
	});
};