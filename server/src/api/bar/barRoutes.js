'use strict';

// Load routes scripts
var getBarCollection = require('./getBarCollection/getBarCollection');
//ghurt-marker:require

// Define route config
var getBarCollectionConfig = {
	method: 'GET',
	path: '/api/bar',
	config: {
		handler: getBarCollection.getBarCollectionHandler,
		cache: {
			privacy: 'default',
			expiresIn: 86400000 //: a day in milliseconds
		}
	}
};
//ghurt-marker:conf

module.exports = [
	getBarCollectionConfig //ghurt-marker:export
];