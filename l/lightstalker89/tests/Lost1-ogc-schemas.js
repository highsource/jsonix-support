var Jsonix = require('jsonix').Jsonix;

// This test uses the GML_3_1_1 mapping from the ogc-schemas package
var XLink_1_0 = require('w3c-schemas').XLink_1_0;
var SMIL_2_0 = require('ogc-schemas').SMIL_2_0;
var SMIL_2_0_Language = require('ogc-schemas').SMIL_2_0_Language;
var GML_3_1_1 = require('ogc-schemas').GML_3_1_1;

var Lost1 = require('../mappings/Lost1').Lost1;

var roundtrips = require('./roundtrip').roundtrips;

var mappings = [XLink_1_0, SMIL_2_0, SMIL_2_0_Language, GML_3_1_1, Lost1];

module.exports = {
	"Context": function(test) {
		var context = new Jsonix.Context(mappings);
		test.done();
        },
	"Roundtrips" : roundtrips(mappings, __dirname)
};
