var Jsonix = require('jsonix').Jsonix;

// Browser version take
var toUnmarshal = [
  XLink_1_0,
  OWS_1_1_0,
  WMS_1_3_0,
  {
    'http://www.opengis.net/wms': 'wms'
  }
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
