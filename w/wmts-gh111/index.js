var Jsonix = require('jsonix').Jsonix;
var fs = require('fs');

var XLink_1_0 = require('w3c-schemas').XLink_1_0;
var OWS_1_1_0 = require('ogc-schemas').OWS_1_1_0;
var GML_3_1_1 = require('ogc-schemas').GML_3_1_1;
var SMIL_2_0 = require('ogc-schemas').SMIL_2_0;
var SMIL_2_0_Language = require('ogc-schemas').SMIL_2_0_Language;
var WMTS_1_0 = require('ogc-schemas').WMTS_1_0;

var context =  new Jsonix.Context([XLink_1_0, OWS_1_1_0, GML_3_1_1, SMIL_2_0, SMIL_2_0_Language, WMTS_1_0], {
	namespacePrefixes : {
		'http://www.w3.org/1999/xlink': 'xlink',
		'http://www.opengis.net/wmts/1.0' : '',
		'http://www.opengis.net/ows/1.1' :'ows'
	}
});

var unmarshaller = context.createUnmarshaller();

var sourceStr = fs.readFileSync('./source.xml').toString();
var doc = unmarshaller.unmarshalString(sourceStr);

console.log(JSON.stringify(doc, null, 2));

var marshaller = context.createMarshaller();

var outStr = marshaller.marshalString(doc);
console.log(outStr);
if (outStr.indexOf('<Value') !== -1) {
	console.error('### Broken document!');
} else {
	console.error('### Document seems fine...');
}
