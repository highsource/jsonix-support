var Jsonix = require('jsonix').Jsonix;
var OGD_Request = require('../mappings/OGD_Request').OGD_Request;

var roundtrips = require('./roundtrip').roundtrips;

var mappings = [OGD_Request];

module.exports = {
	"Context": function(test) {
		var context = new Jsonix.Context(mappings);
		test.done();
        },
	"Roundtrips" : roundtrips(mappings, __dirname)
};
