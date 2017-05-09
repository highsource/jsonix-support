var envelope_Module_Factory = function () {
  var envelope = {
    name: 'envelope',
    defaultElementNamespaceURI: 'http:\/\/schemas.xmlsoap.org\/soap\/envelope\/',
    typeInfos: [{
        localName: 'Fault',
        propertyInfos: [{
            name: 'faultcode',
            required: true,
            elementName: {
              localPart: 'faultcode'
            },
            typeInfo: 'QName'
          }, {
            name: 'faultstring',
            required: true,
            elementName: {
              localPart: 'faultstring'
            }
          }, {
            name: 'faultactor',
            elementName: {
              localPart: 'faultactor'
            }
          }, {
            name: 'detail',
            elementName: {
              localPart: 'detail'
            },
            typeInfo: '.Detail'
          }]
      }, {
        localName: 'Detail',
        typeName: 'detail',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'any',
            minOccurs: 0,
            collection: true,
            mixed: false,
            type: 'anyElement'
          }]
      }, {
        localName: 'Body',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'any',
            minOccurs: 0,
            collection: true,
            mixed: false,
            type: 'anyElement'
          }]
      }, {
        localName: 'Header',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'any',
            minOccurs: 0,
            collection: true,
            mixed: false,
            type: 'anyElement'
          }]
      }, {
        localName: 'Envelope',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'header',
            elementName: 'Header',
            typeInfo: '.Header'
          }, {
            name: 'body',
            required: true,
            elementName: 'Body',
            typeInfo: '.Body'
          }, {
            name: 'any',
            minOccurs: 0,
            collection: true,
            mixed: false,
            type: 'anyElement'
          }]
      }],
    elementInfos: [{
        typeInfo: '.Body',
        elementName: 'Body'
      }, {
        typeInfo: '.Header',
        elementName: 'Header'
      }, {
        typeInfo: '.Envelope',
        elementName: 'Envelope'
      }, {
        typeInfo: '.Fault',
        elementName: 'Fault'
      }]
  };
  return {
    envelope: envelope
  };
};
if (typeof define === 'function' && define.amd) {
  define([], envelope_Module_Factory);
}
else {
  var envelope_Module = envelope_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.envelope = envelope_Module.envelope;
  }
  else {
    var envelope = envelope_Module.envelope;
  }
}