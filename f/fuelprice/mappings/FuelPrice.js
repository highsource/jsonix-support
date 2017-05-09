var FuelPrice_Module_Factory = function () {
  var FuelPrice = {
    name: 'FuelPrice',
    defaultElementNamespaceURI: 'http:\/\/schemas.mobility-media.com\/wsdl\/fuelprice\/v1\/model',
    typeInfos: [{
        localName: 'FuelPrice',
        propertyInfos: [{
            name: 'price',
            required: true,
            typeInfo: '.Price'
          }, {
            name: 'validFrom',
            typeInfo: 'DateTime'
          }, {
            name: 'lastUpdate',
            required: true,
            typeInfo: 'DateTime'
          }, {
            name: 'stationId',
            required: true,
            typeInfo: 'Long',
            attributeName: {
              localPart: 'stationId'
            },
            type: 'attribute'
          }, {
            name: 'provider',
            required: true,
            attributeName: {
              localPart: 'provider'
            },
            type: 'attribute'
          }, {
            name: 'fuelType',
            required: true,
            attributeName: {
              localPart: 'fuelType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Price',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Float',
            type: 'value'
          }, {
            name: 'currency',
            required: true,
            attributeName: {
              localPart: 'currency'
            },
            type: 'attribute'
          }]
      }],
    elementInfos: []
  };
  return {
    FuelPrice: FuelPrice
  };
};
if (typeof define === 'function' && define.amd) {
  define([], FuelPrice_Module_Factory);
}
else {
  var FuelPrice_Module = FuelPrice_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.FuelPrice = FuelPrice_Module.FuelPrice;
  }
  else {
    var FuelPrice = FuelPrice_Module.FuelPrice;
  }
}