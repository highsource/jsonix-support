var getFuelStationsResponse_Module_Factory = function () {
  var getFuelStationsResponse = {
    name: 'getFuelStationsResponse',
    defaultElementNamespaceURI: 'http:\/\/schemas.mobility-media.com\/wsdl\/fuelprice\/v1\/model',
    typeInfos: [{
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
      }, {
        localName: 'Brand',
        propertyInfos: [{
            name: 'key',
            required: true,
            attributeName: {
              localPart: 'key'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'OpeningHours',
        propertyInfos: [{
            name: '_default',
            required: true,
            elementName: 'default',
            typeInfo: '.OpeningHours.Default'
          }, {
            name: 'exceptions',
            required: true,
            typeInfo: '.OpeningHours.Exceptions'
          }]
      }, {
        localName: 'OpeningHours.Exceptions.ExceptionItem',
        typeName: null,
        baseTypeInfo: '.OpeningHoursDay',
        propertyInfos: [{
            name: 'date',
            required: true,
            typeInfo: 'Date',
            attributeName: {
              localPart: 'date'
            },
            type: 'attribute'
          }]
      }, {
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
        localName: 'OpeningHours.Default',
        typeName: null,
        propertyInfos: [{
            name: 'item',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'item'
            },
            typeInfo: '.OpeningHours.Default.Item'
          }]
      }, {
        localName: 'FuelStation.FuelCards',
        typeName: null,
        propertyInfos: [{
            name: 'fuelCard',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'fuelCard'
            },
            typeInfo: '.FuelCard'
          }]
      }, {
        localName: 'TimeInterval',
        propertyInfos: [{
            name: 'start',
            required: true,
            typeInfo: '.Time'
          }, {
            name: 'end',
            required: true,
            typeInfo: '.Time'
          }, {
            name: 'orderNum',
            required: true,
            typeInfo: 'Int'
          }]
      }, {
        localName: 'SearchResult',
        propertyInfos: [{
            name: 'fuelStation',
            required: true,
            typeInfo: '.FuelStation'
          }, {
            name: 'prices',
            typeInfo: '.FuelPriceSet'
          }, {
            name: 'distance',
            typeInfo: 'Float'
          }]
      }, {
        localName: 'OpeningHours.Exceptions',
        typeName: null,
        propertyInfos: [{
            name: 'exceptionItem',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'exceptionItem'
            },
            typeInfo: '.OpeningHours.Exceptions.ExceptionItem'
          }]
      }, {
        localName: 'FuelStation.PaymentMethods',
        typeName: null,
        propertyInfos: [{
            name: 'paymentMethod',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'paymentMethod'
            },
            typeInfo: '.PaymentMethod'
          }]
      }, {
        localName: 'GeoLocation',
        propertyInfos: [{
            name: 'latitude',
            required: true,
            typeInfo: 'Double'
          }, {
            name: 'longitude',
            required: true,
            typeInfo: 'Double'
          }, {
            name: 'ellipsoid',
            required: true,
            attributeName: {
              localPart: 'ellipsoid'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Service',
        propertyInfos: [{
            name: 'key',
            required: true,
            attributeName: {
              localPart: 'key'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Time',
        propertyInfos: [{
            name: 'hours',
            required: true,
            typeInfo: 'Int',
            attributeName: {
              localPart: 'hours'
            },
            type: 'attribute'
          }, {
            name: 'minutes',
            required: true,
            typeInfo: 'Int',
            attributeName: {
              localPart: 'minutes'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'OpeningHoursDay.Interval',
        typeName: null,
        baseTypeInfo: '.TimeInterval'
      }, {
        localName: 'OpeningHoursDay',
        propertyInfos: [{
            name: 'interval',
            minOccurs: 0,
            collection: true,
            typeInfo: '.OpeningHoursDay.Interval'
          }]
      }, {
        localName: 'Country',
        propertyInfos: [{
            name: 'code',
            required: true,
            attributeName: {
              localPart: 'code'
            },
            type: 'attribute'
          }, {
            name: 'timezone',
            attributeName: {
              localPart: 'timezone'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'FuelStation.Services',
        typeName: null,
        propertyInfos: [{
            name: 'service',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'service'
            },
            typeInfo: '.Service'
          }]
      }, {
        localName: 'OpeningHours.Default.Item',
        typeName: null,
        baseTypeInfo: '.OpeningHoursDay',
        propertyInfos: [{
            name: 'day',
            required: true,
            typeInfo: 'Int',
            attributeName: {
              localPart: 'day'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'FuelPriceSet',
        propertyInfos: [{
            name: 'price',
            minOccurs: 0,
            collection: true,
            typeInfo: '.FuelPrice'
          }, {
            name: 'stationId',
            required: true,
            typeInfo: 'Long',
            attributeName: {
              localPart: 'stationId'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Address',
        propertyInfos: [{
            name: 'line1',
            required: true
          }, {
            name: 'line2',
            required: true
          }, {
            name: 'city',
            required: true
          }, {
            name: 'postalCode',
            required: true
          }, {
            name: 'country',
            required: true
          }, {
            name: 'stateRegion'
          }]
      }, {
        localName: 'PaymentMethod',
        propertyInfos: [{
            name: 'key',
            required: true,
            attributeName: {
              localPart: 'key'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'FuelCard',
        propertyInfos: [{
            name: 'key',
            required: true,
            attributeName: {
              localPart: 'key'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'FuelStation',
        propertyInfos: [{
            name: 'location',
            required: true,
            typeInfo: '.GeoLocation'
          }, {
            name: 'address',
            required: true,
            typeInfo: '.Address'
          }, {
            name: 'name',
            required: true
          }, {
            name: 'brand',
            typeInfo: '.Brand'
          }, {
            name: 'services',
            typeInfo: '.FuelStation.Services'
          }, {
            name: 'fuelCards',
            typeInfo: '.FuelStation.FuelCards'
          }, {
            name: 'paymentMethods',
            typeInfo: '.FuelStation.PaymentMethods'
          }, {
            name: 'openingHours',
            typeInfo: '.OpeningHours'
          }, {
            name: 'country',
            required: true,
            typeInfo: '.Country'
          }, {
            name: 'providerId'
          }, {
            name: 'id',
            typeInfo: 'Long',
            attributeName: {
              localPart: 'id'
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
            name: 'lastUpdate',
            typeInfo: 'DateTime',
            attributeName: {
              localPart: 'lastUpdate'
            },
            type: 'attribute'
          }]
      }],
    elementInfos: []
  };
  return {
    getFuelStationsResponse: getFuelStationsResponse
  };
};
if (typeof define === 'function' && define.amd) {
  define([], getFuelStationsResponse_Module_Factory);
}
else {
  var getFuelStationsResponse_Module = getFuelStationsResponse_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.getFuelStationsResponse = getFuelStationsResponse_Module.getFuelStationsResponse;
  }
  else {
    var getFuelStationsResponse = getFuelStationsResponse_Module.getFuelStationsResponse;
  }
}