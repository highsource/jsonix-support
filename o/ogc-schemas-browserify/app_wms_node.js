var Jsonix = require('jsonix').Jsonix;
var XLink_1_0 = require('w3c-schemas/lib/XLink_1_0').XLink_1_0;
var OWS_1_1_0 = require('ogc-schemas/lib/OWS_1_1_0').OWS_1_1_0;
var WMS_1_3_0 = require('ogc-schemas/lib/WMS_1_3_0').WMS_1_3_0;

var context = new Jsonix.Context([XLink_1_0, OWS_1_1_0, WMS_1_3_0], {
	// Not required but recommended
	namespacePrefixes: {
		'http://www.w3.org/1999/xlink': 'xlink',
		'http://www.opengis.net/wms': 'wms',
		'http://www.opengis.net/ows/1.1': 'ows'
	}
});

var unmarshaller = context.createUnmarshaller();

unmarshaller.unmarshalFile('data/ogcsample.xml', function(result) {
	console.log(JSON.stringify(result, null, 2));
});
