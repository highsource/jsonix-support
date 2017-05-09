var FuelStation_Module_Factory = function () {
  var FuelStation = {
    name: 'FuelStation',
    defaultElementNamespaceURI: 'http:\/\/schemas.mobility-media.com\/wsdl\/fuelprice\/v1\/model',
    typeInfos: [{
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
        localName: 'OpeningHoursDay',
        propertyInfos: [{
            name: 'interval',
            minOccurs: 0,
            collection: true,
            typeInfo: '.OpeningHoursDay.Interval'
          }]
      }],
    elementInfos: []
  };
  return {
    FuelStation: FuelStation
  };
};
if (typeof define === 'function' && define.amd) {
  define([], FuelStation_Module_Factory);
}
else {
  var FuelStation_Module = FuelStation_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.FuelStation = FuelStation_Module.FuelStation;
  }
  else {
    var FuelStation = FuelStation_Module.FuelStation;
  }
}