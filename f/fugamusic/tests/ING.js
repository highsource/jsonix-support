var Jsonix = require('jsonix').Jsonix;

var ING = require('../mappings/ING').ING;
var ING_ISO3166 = require('../mappings/ING_ISO3166').ING_ISO3166;
var ING_ISO6391 = require('../mappings/ING_ISO6391').ING_ISO6391;

var roundtrips = require('./roundtrip').roundtrips;

var mappings = [ING, ING_ISO3166, ING_ISO6391];

module.exports = {
	"Context": function(test) {
		var context = new Jsonix.Context(mappings);
		test.done();
        },
	"Roundtrips" : roundtrips(mappings, __dirname)
};
