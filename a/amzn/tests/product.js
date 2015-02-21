var Jsonix = require('jsonix').Jsonix;
var AMZN = require('../mappings/AMZN').AMZN;

var roundtrips = require('./roundtrip').roundtrips;

var mappings = [AMZN];

module.exports = {
	"Context": function(test) {
		var context = new Jsonix.Context(mappings);
		test.done();
        },
	"Roundtrips" : roundtrips(mappings, __dirname)
};