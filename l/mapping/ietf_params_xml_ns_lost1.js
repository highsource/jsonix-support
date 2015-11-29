var ietf_params_xml_ns_lost1_Module_Factory = function () {
  var ietf_params_xml_ns_lost1 = {
    name: 'ietf_params_xml_ns_lost1',
    defaultElementNamespaceURI: 'urn:ietf:params:xml:ns:lost1',
    dependencies: ['net_opengis_gml'],
    typeInfos: [{
        localName: 'FindService',
        typeName: null,
        propertyInfos: [{
            name: 'location',
            required: true,
            typeInfo: '.Location'
          }, {
            name: 'service',
            required: true
          }, {
            name: 'recursive',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'recursive'
            },
            type: 'attribute'
          }, {
            name: 'serviceBoundary',
            required: true,
            attributeName: {
              localPart: 'serviceBoundary'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Location',
        typeName: null,
        propertyInfos: [{
            name: 'point',
            required: true,
            elementName: {
              localPart: 'Point',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            typeInfo: 'net_opengis_gml.Point'
          }, {
            name: 'id',
            required: true,
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }, {
            name: 'profile',
            required: true,
            attributeName: {
              localPart: 'profile'
            },
            type: 'attribute'
          }]
      }],
    elementInfos: [{
        elementName: 'service'
      }, {
        elementName: 'location',
        typeInfo: '.Location'
      }, {
        elementName: 'findService',
        typeInfo: '.FindService'
      }]
  };
  return {
    ietf_params_xml_ns_lost1: ietf_params_xml_ns_lost1
  };
};
if (typeof define === 'function' && define.amd) {
  define([], ietf_params_xml_ns_lost1_Module_Factory);
}
else {
  var ietf_params_xml_ns_lost1_Module = ietf_params_xml_ns_lost1_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.ietf_params_xml_ns_lost1 = ietf_params_xml_ns_lost1_Module.ietf_params_xml_ns_lost1;
  }
  else {
    var ietf_params_xml_ns_lost1 = ietf_params_xml_ns_lost1_Module.ietf_params_xml_ns_lost1;
  }
}