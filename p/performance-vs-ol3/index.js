var Jsonix = require('jsonix').Jsonix;
var XLink_1_0 = require('w3c-schemas/lib/XLink_1_0').XLink_1_0;
var OWS_1_1_0 = require('ogc-schemas/lib/OWS_1_1_0').OWS_1_1_0;
var WMS_1_3_0 = require('ogc-schemas/lib/WMS_1_3_0').WMS_1_3_0;

var ol = require('openlayers');

var format = new ol.format.WMSCapabilities();

var context = new Jsonix.Context([XLink_1_0, OWS_1_1_0, WMS_1_3_0], {
//    mappingStyle : 'simplified',
    supportXsiType : false,
    namespacePrefixes: {
        'http://www.w3.org/1999/xlink': 'xlink',
        'http://www.opengis.net/wms': 'wms',
        'http://www.opengis.net/ows/1.1': 'ows'
    }
});

var unmarshaller = context.createUnmarshaller();

var xhr = new XMLHttpRequest();
xhr.open('GET', 'caps.xml', true);
xhr.onload = function (e) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      for (var i=0; i<10; i++) {
        console.time('JSONIX');
        var jsonixResult = unmarshaller.unmarshalDocument(xhr.responseXML);
        console.timeEnd('JSONIX');
        console.log(JSON.stringify(jsonixResult, null, 2));
        console.time('ol3');
        var ol3Result = format.read(xhr.responseXML);
        console.log(JSON.stringify(ol3Result, null, 2));
        console.timeEnd('ol3');
      }
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.send(null);
