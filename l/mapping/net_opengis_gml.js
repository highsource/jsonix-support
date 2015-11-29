var net_opengis_gml_Module_Factory = function () {
  var net_opengis_gml = {
    name: 'net_opengis_gml',
    defaultElementNamespaceURI: 'http:\/\/www.opengis.net\/gml',
    typeInfos: [{
        localName: 'Point',
        typeName: null,
        propertyInfos: [{
            name: 'pos',
            required: true
          }, {
            name: 'srsName',
            required: true,
            attributeName: {
              localPart: 'srsName'
            },
            type: 'attribute'
          }]
      }],
    elementInfos: [{
        elementName: 'pos'
      }, {
        elementName: 'Point',
        typeInfo: '.Point'
      }]
  };
  return {
    net_opengis_gml: net_opengis_gml
  };
};
if (typeof define === 'function' && define.amd) {
  define([], net_opengis_gml_Module_Factory);
}
else {
  var net_opengis_gml_Module = net_opengis_gml_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.net_opengis_gml = net_opengis_gml_Module.net_opengis_gml;
  }
  else {
    var net_opengis_gml = net_opengis_gml_Module.net_opengis_gml;
  }
}