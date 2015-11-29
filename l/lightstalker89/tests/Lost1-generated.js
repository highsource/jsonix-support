var Jsonix = require('jsonix').Jsonix;

// This test uses the generated GML_3_1_1 mapping
var GML_3_1_1 = require('../mappings/GML_3_1_1').GML_3_1_1;
var Lost1 = require('../mappings/Lost1').Lost1;

var roundtrips = require('./roundtrip').roundtrips;

var mappings = [GML_3_1_1, Lost1];

module.exports = {
	"Context": function(test) {
		var context = new Jsonix.Context(mappings);
		test.done();
        },
	"Roundtrips" : roundtrips(mappings, __dirname)
};
