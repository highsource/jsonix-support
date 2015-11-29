var Lost1_Module_Factory = function () {
  var Lost1 = {
    name: 'Lost1',
    defaultElementNamespaceURI: 'urn:ietf:params:xml:ns:lost1',
    dependencies: ['GML_3_1_1'],
    typeInfos: [{
        localName: 'Location',
        typeName: null,
        propertyInfos: [{
            name: 'point',
            required: true,
            elementName: {
              localPart: 'Point',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            typeInfo: 'GML_3_1_1.PointType'
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
      }, {
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
      }],
    elementInfos: [{
        elementName: 'location',
        typeInfo: '.Location'
      }, {
        elementName: 'service'
      }, {
        elementName: 'findService',
        typeInfo: '.FindService'
      }]
  };
  return {
    Lost1: Lost1
  };
};
if (typeof define === 'function' && define.amd) {
  define([], Lost1_Module_Factory);
}
else {
  var Lost1_Module = Lost1_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.Lost1 = Lost1_Module.Lost1;
  }
  else {
    var Lost1 = Lost1_Module.Lost1;
  }
}