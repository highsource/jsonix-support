var GML_3_1_1_Module_Factory = function () {
  var GML_3_1_1 = {
    name: 'GML_3_1_1',
    defaultElementNamespaceURI: 'http:\/\/www.opengis.net\/gml',
    typeInfos: [{
        localName: 'PointType',
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
    elementInfos: []
  };
  return {
    GML_3_1_1: GML_3_1_1
  };
};
if (typeof define === 'function' && define.amd) {
  define([], GML_3_1_1_Module_Factory);
}
else {
  var GML_3_1_1_Module = GML_3_1_1_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.GML_3_1_1 = GML_3_1_1_Module.GML_3_1_1;
  }
  else {
    var GML_3_1_1 = GML_3_1_1_Module.GML_3_1_1;
  }
}