var Jsonix = require('jsonix').Jsonix;
var OGD = require('../mappings/OGD_1_3').OGD;
var OGD_DocumentResponse = require('../mappings/OGD_1_3').OGD_DocumentResponse;

var roundtrips = require('./roundtrip').roundtrips;

var mappings = [OGD, OGD_DocumentResponse];

module.exports = {
	"Context": function(test) {
		var context = new Jsonix.Context(mappings);
		test.done();
        },
	"Roundtrips" : roundtrips(mappings, __dirname)
};
