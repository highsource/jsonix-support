var fs = require('fs');
var Ajv = require('ajv');
var Jsonix = require('jsonix').Jsonix;
var WMS_1_3_0_Full = require('../mappings/WMS_1_3_0_Full');
var WMS_1_3_0 = WMS_1_3_0_Full.WMS_1_3_0;
var XLink_1_0 = WMS_1_3_0_Full.XLink_1_0;

module.exports = {
	"UnmarshalFile": function(test) {

		// Create Jsonix context
		var context = new Jsonix.Context([ XLink_1_0, WMS_1_3_0 ]);
		
		// Create unmarshaller
		var unmarshaller = context.createUnmarshaller();
		
		// Unmarshal the XML file
		unmarshaller.unmarshalFile( 'tests/GetCapabilities.xml',
			function(capabilitiesElement) {
				// console.log(JSON.stringify(capabilitiesElement, null, 4));

				var capabilities = capabilitiesElement.value;
				test.equal('WMS', capabilities.service.name);
				test.done();
		});
        },
	"ValidateJson": function (test) {
		// Load JSON Schemas
		var XMLSchemaJsonSchema = JSON.parse(fs.readFileSync('./node_modules/jsonix/jsonschemas/w3c/2001/XMLSchema.jsonschema').toString());
		var JsonixJsonSchema = JSON.parse(fs.readFileSync('./node_modules/jsonix/jsonschemas/Jsonix/Jsonix.jsonschema').toString());
		var XLink_1_0JsonSchema = JSON.parse(fs.readFileSync('mappings/XLink_1_0.jsonschema').toString());
		var WMS_1_3_0JsonSchema = JSON.parse(fs.readFileSync('mappings/WMS_1_3_0.jsonschema').toString());

		var ajv = new Ajv();
		ajv.addSchema(XMLSchemaJsonSchema, 'http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema');
		ajv.addSchema(JsonixJsonSchema, 'http://www.jsonix.org/jsonschemas/jsonix/Jsonix.jsonschema');
		ajv.addSchema(XLink_1_0JsonSchema, 'http://www.w3.org/1999/xlink');
		var validate = ajv.compile(WMS_1_3_0JsonSchema);

		// Create Jsonix context
		var context = new Jsonix.Context([ XLink_1_0, WMS_1_3_0 ]);

		// Create unmarshaller
		var unmarshaller = context.createUnmarshaller();

		unmarshaller.unmarshalFile( 'tests/GetCapabilities.xml',
			function(capabilitiesElement) {
				console.log('Validating.');
				var valid = validate(capabilitiesElement);
				if (valid) {
					console.log('Validation succeeded.');
				}
				if (!valid) {
					console.log('Validation failed.');
					console.log('Validation errors:');
					console.log(validate.errors);
				}
				test.ok(valid, 'Validation failed.');
				test.done();
			});
	}
};
