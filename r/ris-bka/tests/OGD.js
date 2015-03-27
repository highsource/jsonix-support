var Jsonix = require('jsonix').Jsonix;
var OGD = require('../mappings/OGD').OGD;

var roundtrips = require('./roundtrip').roundtrips;

var mappings = [OGD];

module.exports = {
	"Context": function(test) {
		var context = new Jsonix.Context(mappings);
		test.done();
        },
	"Roundtrips" : roundtrips(mappings, __dirname)
};