var schema_Module_Factory = function () {
  var schema = {
    name: 'schema',
    defaultElementNamespaceURI: 'http:\/\/schemas.mobility-media.com\/wsdl\/fuelprice\/v1\/model',
    typeInfos: [{
        localName: 'PriceComplaint',
        propertyInfos: [{
            name: 'statetPrice',
            typeInfo: '.Price'
          }, {
            name: 'actualPrice',
            typeInfo: '.Price'
          }, {
            name: 'fuelType',
            required: true,
            attributeName: {
              localPart: 'fuelType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SearchFilter',
        propertyInfos: [{
            name: 'brands',
            typeInfo: '.SearchFilter.Brands'
          }, {
            name: 'fuelTypes',
            typeInfo: '.SearchFilter.FuelTypes'
          }, {
            name: 'services',
            typeInfo: '.SearchFilter.Services'
          }, {
            name: 'fuelCards',
            typeInfo: '.SearchFilter.FuelCards'
          }, {
            name: 'paymentMethods',
            typeInfo: '.SearchFilter.PaymentMethods'
          }, {
            name: 'open',
            typeInfo: '.SearchFilter.Open'
          }]
      }, {
        localName: 'OpeningHoursDay',
        propertyInfos: [{
            name: 'interval',
            minOccurs: 0,
            collection: true,
            typeInfo: '.OpeningHoursDay.Interval'
          }]
      }, {
        localName: 'SearchFilter.FuelCards',
        typeName: null,
        baseTypeInfo: '.KeySet',
        propertyInfos: [{
            name: 'operator',
            required: true,
            typeInfo: '.FilterOperator',
            attributeName: {
              localPart: 'operator'
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
        localName: 'ComplaintIssues.Data.OpeningHours.OpeningHoursDay',
        typeName: null,
        baseTypeInfo: '.OpeningHoursComplaint'
      }, {
        localName: 'SearchFilter.FuelTypes',
        typeName: null,
        baseTypeInfo: '.KeySet',
        propertyInfos: [{
            name: 'operator',
            required: true,
            typeInfo: '.FilterOperator',
            attributeName: {
              localPart: 'operator'
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
        localName: 'SearchFilter.Open',
        typeName: null,
        propertyInfos: [{
            name: 'time',
            required: true,
            elementName: {
              localPart: 'time'
            },
            typeInfo: '.Time'
          }, {
            name: 'timezone',
            required: true,
            attributeName: {
              localPart: 'timezone'
            },
            type: 'attribute'
          }, {
            name: 'offset',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'offset'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'KeySet',
        propertyInfos: [{
            name: 'key',
            minOccurs: 0,
            collection: true
          }]
      }, {
        localName: 'ComplaintIssues.Data',
        typeName: null,
        propertyInfos: [{
            name: 'price',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'price'
            },
            typeInfo: '.PriceComplaint'
          }, {
            name: 'address',
            elementName: {
              localPart: 'address'
            },
            typeInfo: '.AddressComplaint'
          }, {
            name: 'openingHours',
            elementName: {
              localPart: 'openingHours'
            },
            typeInfo: '.ComplaintIssues.Data.OpeningHours'
          }]
      }, {
        localName: 'SearchFilter.Services',
        typeName: null,
        baseTypeInfo: '.KeySet',
        propertyInfos: [{
            name: 'operator',
            required: true,
            typeInfo: '.FilterOperator',
            attributeName: {
              localPart: 'operator'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Area',
        propertyInfos: [{
            name: 'center',
            required: true,
            typeInfo: '.GeoLocation'
          }, {
            name: 'radius',
            required: true,
            typeInfo: 'Float'
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
        localName: 'SearchFilter.Brands',
        typeName: null,
        baseTypeInfo: '.KeySet',
        propertyInfos: [{
            name: 'operator',
            required: true,
            typeInfo: '.FilterOperator',
            attributeName: {
              localPart: 'operator'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SearchFilter.PaymentMethods',
        typeName: null,
        baseTypeInfo: '.KeySet',
        propertyInfos: [{
            name: 'operator',
            required: true,
            typeInfo: '.FilterOperator',
            attributeName: {
              localPart: 'operator'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Person',
        propertyInfos: [{
            name: 'fullName'
          }, {
            name: 'email'
          }, {
            name: 'phone'
          }, {
            name: 'address',
            typeInfo: '.Address'
          }, {
            name: 'userId',
            typeInfo: 'Long',
            attributeName: {
              localPart: 'userId'
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
        localName: 'ResultPaging',
        propertyInfos: [{
            name: 'offset',
            required: true,
            typeInfo: 'Int',
            attributeName: {
              localPart: 'offset'
            },
            type: 'attribute'
          }, {
            name: 'count',
            required: true,
            typeInfo: 'Int',
            attributeName: {
              localPart: 'count'
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
        localName: 'ComplaintFilter',
        propertyInfos: [{
            name: 'date',
            typeInfo: '.ComplaintFilter.Date'
          }, {
            name: 'provider'
          }, {
            name: 'client'
          }, {
            name: 'stationId',
            typeInfo: 'Long'
          }, {
            name: 'name'
          }, {
            name: 'hasFuelPrice',
            typeInfo: 'Boolean'
          }, {
            name: 'hasAddress',
            typeInfo: 'Boolean'
          }, {
            name: 'hasOpeningHours',
            typeInfo: 'Boolean'
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
        localName: 'OpeningHoursDay.Interval',
        typeName: null,
        baseTypeInfo: '.TimeInterval'
      }, {
        localName: 'Approval',
        propertyInfos: [{
            name: 'approvalTime',
            required: true,
            typeInfo: 'DateTime'
          }, {
            name: 'comment'
          }, {
            name: 'approverId',
            required: true,
            typeInfo: 'Long',
            attributeName: {
              localPart: 'approverId'
            },
            type: 'attribute'
          }, {
            name: 'rejected',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'rejected'
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
        localName: 'ComplaintIssues.Data.OpeningHours',
        typeName: null,
        propertyInfos: [{
            name: 'openingHoursDay',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'openingHoursDay'
            },
            typeInfo: '.ComplaintIssues.Data.OpeningHours.OpeningHoursDay'
          }]
      }, {
        localName: 'AddressComplaint',
        propertyInfos: [{
            name: 'actualAddress',
            typeInfo: '.Address'
          }, {
            name: 'actualName'
          }, {
            name: 'wrongGeoLocation',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'wrongGeoLocation'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'OpeningHoursComplaint',
        propertyInfos: [{
            name: 'actualHours',
            required: true,
            typeInfo: '.OpeningHoursDay'
          }, {
            name: 'day',
            required: true,
            typeInfo: 'Int',
            attributeName: {
              localPart: 'day'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Complaint',
        propertyInfos: [{
            name: 'reporter',
            typeInfo: '.Person'
          }, {
            name: 'reportTime',
            required: true,
            typeInfo: 'DateTime'
          }, {
            name: 'observeTime',
            required: true,
            typeInfo: 'DateTime'
          }, {
            name: 'approval',
            typeInfo: '.Approval'
          }, {
            name: 'forwardTime',
            typeInfo: 'DateTime'
          }, {
            name: 'issues',
            required: true,
            typeInfo: '.ComplaintIssues'
          }, {
            name: 'id',
            typeInfo: 'Long',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }, {
            name: 'fuelStationId',
            required: true,
            typeInfo: 'Long',
            attributeName: {
              localPart: 'fuelStationId'
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
            name: 'client',
            attributeName: {
              localPart: 'client'
            },
            type: 'attribute'
          }, {
            name: 'status',
            typeInfo: '.ComplaintStatus',
            attributeName: {
              localPart: 'status'
            },
            type: 'attribute'
          }, {
            name: 'type',
            required: true,
            typeInfo: '.ComplaintType',
            attributeName: {
              localPart: 'type'
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
        localName: 'ComplaintFilter.Date',
        typeName: null,
        propertyInfos: [{
            name: 'from',
            typeInfo: 'DateTime',
            attributeName: {
              localPart: 'from'
            },
            type: 'attribute'
          }, {
            name: 'to',
            typeInfo: 'DateTime',
            attributeName: {
              localPart: 'to'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ComplaintIssues',
        propertyInfos: [{
            name: 'note',
            required: true
          }, {
            name: 'reason',
            required: true
          }, {
            name: 'data',
            required: true,
            typeInfo: '.ComplaintIssues.Data'
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
        type: 'enumInfo',
        localName: 'UpdateThresholdMode',
        values: ['CHANGED', 'UPDATED']
      }, {
        type: 'enumInfo',
        localName: 'ComplaintStatus',
        values: ['NEW', 'APPROVED', 'REJECTED', 'FORWARDED']
      }, {
        type: 'enumInfo',
        localName: 'AreaResultOrder',
        values: ['DISTANCE', 'PRICE', 'UNDEFINED']
      }, {
        type: 'enumInfo',
        localName: 'ComplaintType',
        values: ['CALLCENTER', 'USER', 'SYSTEM']
      }, {
        type: 'enumInfo',
        localName: 'FilterOperator',
        values: ['AND', 'OR']
      }],
    elementInfos: []
  };
  return {
    schema: schema
  };
};
if (typeof define === 'function' && define.amd) {
  define([], schema_Module_Factory);
}
else {
  var schema_Module = schema_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.schema = schema_Module.schema;
  }
  else {
    var schema = schema_Module.schema;
  }
}