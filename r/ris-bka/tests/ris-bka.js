var Jsonix = require('jsonix').Jsonix;
var RISBKA = require('../mappings/RISBKA').RISBKA;

var roundtrips = require('./roundtrip').roundtrips;

var mappings = [RISBKA];

module.exports = {
	"Context": function(test) {
		var context = new Jsonix.Context(mappings);
		test.done();
        },
	"Roundtrips" : roundtrips(mappings, __dirname)
};