var Jsonix = require('jsonix').Jsonix;
// Below require will make a build unable to load correctly each file because
// node_modules/w3c-schemas/w3c-schemas.js load dynamicly each subfile but it's not something Browserify can solve
var XLink_1_0 = require('w3c-schemas').XLink_1_0;
var OWS_1_1_0 = require('ogc-schemas').OWS_1_1_0;
var WMS_1_3_0 = require('ogc-schemas').WMS_1_3_0;

// Browser version take
var toUnmarshal = [
  XLink_1_0,
  OWS_1_1_0,
  WMS_1_3_0
];

var context = new Jsonix.Context(toUnmarshal, {
  namespacePrefixes: {
    'http://www.opengis.net/wms': 'wms'
  }
});
var unmarshaller = context.createUnmarshaller();

unmarshaller.unmarshalURL('data/ogcsample.xml', function(result) {
  console.log(JSON.stringify(result, null, '  '));
});
