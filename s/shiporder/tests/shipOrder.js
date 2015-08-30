var fs = require('fs');

var Jsonix = require('jsonix').Jsonix;

var ShipOrder = require('../mappings/ShipOrder').ShipOrder;
var mappings = [ShipOrder];
var context = new Jsonix.Context(mappings);


var XMLSchemaJsonSchema = JSON.parse(fs.readFileSync('./node_modules/jsonix/jsonschemas/w3c/2001/XMLSchema.jsonschema').toString());
var JsonixJsonSchema = JSON.parse(fs.readFileSync('./node_modules/jsonix/jsonschemas/Jsonix/Jsonix.jsonschema').toString());
var ShipOrderJsonSchema = JSON.parse(fs.readFileSync('./mappings/ShipOrder.jsonschema').toString());

var Ajv = require('ajv');
var ajv = new Ajv();
ajv.addSchema(XMLSchemaJsonSchema, 'http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#');
ajv.addSchema(JsonixJsonSchema, 'http://www.jsonix.org/jsonschemas/jsonix/Jsonix.jsonschema#');
var validate = ajv.compile(ShipOrderJsonSchema);

var checkValidXmls = require('./checkValid').checkValidXmls;
var checkValidJsons = require('./checkValid').checkValidJsons;

module.exports = {
	"Context": function(test) {
		var context = new Jsonix.Context(mappings);
		test.done();
        },
	"Validate": function(test) {
		var ajv = new Ajv();
		ajv.addSchema(XMLSchemaJsonSchema, 'http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#');
		ajv.addSchema(JsonixJsonSchema, 'http://www.jsonix.org/jsonschemas/jsonix/Jsonix.jsonschema#');
		var validate = ajv.compile(ShipOrderJsonSchema);
		test.done();
	},
	"checkValidXmls" : checkValidXmls(context, validate, __dirname),
	"checkValidJsons" : checkValidJsons(context, validate, __dirname)
};
