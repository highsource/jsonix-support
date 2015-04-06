var Jsonix = require('jsonix').Jsonix;
var OGD_DocumentResponse = require('../mappings/OGD_DocumentResponse').OGD_DocumentResponse;
var RISDok = require('../mappings/RISDok').RISDok;
var RISJudikaturNutzdaten = require('../mappings/RISJudikaturNutzdaten').RISJudikaturNutzdaten;

var roundtrips = require('./roundtrip').roundtrips;

var mappings = [OGD_DocumentResponse, RISDok, RISJudikaturNutzdaten];

module.exports = {
	"Context": function(test) {
		var context = new Jsonix.Context(mappings);
		test.done();
        },
	"Roundtrips" : roundtrips(mappings, __dirname)
};
