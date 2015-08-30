var Jsonix = require('jsonix').Jsonix;
var Ajv = require('ajv');
var fs = require('fs');
var checkValidXml = function (test, context, validate, resource) {
		var unmarshaller = context.createUnmarshaller();
		console.log('Unmarshalling [' + resource + '].');
		unmarshaller.unmarshalFile(resource,
			function(one) {
				console.log('Unmarshalled document:');
				console.log(JSON.stringify(one, null, 4));
				console.log('Validating.');
				var valid = validate(one);
				if (!valid) {
					console.log('Validation errors.');
					console.log(validate.errors);
				}

				test.ok(valid, 'Validation of the unmarshalled resource [' + resource + '] failed.');
				test.done();
			}
		);
	};
var checkValidJson = function (test, context, validate, resource) {
		console.log('Reading [' + resource + '].');

		var jsonData = fs.readFileSync(resource);
		var jsonText = jsonData.toString();
		var json = JSON.parse(jsonText);

		console.log("Read JSON:");
		console.log(JSON.stringify(json, null, 4));
		console.log('Validating.');
		var valid = validate(json);
		if (!valid) {
			console.log('Validation errors.');
			console.log(validate.errors);
		}
		test.ok(valid, 'Validation of the JSON resource [' + resource + '] failed.');
		var marshaller = context.createMarshaller();
		console.log('Marshalling [' + resource + '].');
		var marshalled = marshaller.marshalString(json);
		console.log('Marshalled XML:');
		console.log(marshalled);		
		test.done();
	};
module.exports = {
	checkValidXml: checkValidXml,
	checkValidJson: checkValidJson,
	checkValidXmls: function(mappings, schemas, directory)
	{
		var checkValidXmlFactory = function (resource) {
			return function(test) {
				console.log('Testing [' + resource + '].');
				checkValidXml(test, mappings, schemas, resource);
			};
		};
		var files = fs.readdirSync(directory);
		var result = {};
		for (var index = 0; index < files.length; index++)
		{
			var file = files[index];
			if (!!file.match(/\.valid\.xml$/))
			{
				var resourceName = directory + '/' + file;
				console.log('Adding checkValidXml test ['+ resourceName + ']');
				result[file] = checkValidXmlFactory(resourceName);
			}
		}
		return result
	},
	checkValidJsons: function(mappings, schemas, directory)
	{
		var checkValidJsonFactory = function (resource) {
			return function(test) {
				console.log('Testing [' + resource + '].');
				checkValidJson(test, mappings, schemas, resource);
			};
		};
		var files = fs.readdirSync(directory);
		var result = {};
		for (var index = 0; index < files.length; index++)
		{
			var file = files[index];
			if (!!file.match(/\.valid\.json$/))
			{
				var resourceName = directory + '/' + file;
				console.log('Adding checkValidJson test ['+ resourceName + ']');
				result[file] = checkValidJsonFactory(resourceName);
			}
		}
		return result
	}
}