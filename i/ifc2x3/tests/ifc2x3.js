var fs = require('fs');

var Jsonix = require('jsonix').Jsonix;

var EX = require('../mappings/EX').EX;
var IFC2x3 = require('../mappings/IFC2x3').IFC2x3;
var mappings = [EX, IFC2x3];


module.exports = {
	"Context": function(test) {
		var context = new Jsonix.Context(mappings);
		test.done();
        },
	"Unmarshalling": function(test) {
		var context = new Jsonix.Context(mappings);
		var unmarshaller = context.createUnmarshaller();
		unmarshaller.unmarshalFile('./tests/example.ifcxml', function(result){
			console.log(JSON.stringify(result, null, 2));
			test.done();
		});
	}
};

