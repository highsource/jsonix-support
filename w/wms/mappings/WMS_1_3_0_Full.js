var WMS_1_3_0_Full_Module_Factory = function () {
  var WMS_1_3_0 = {
    name: 'WMS_1_3_0',
    defaultElementNamespaceURI: 'http:\/\/www.opengis.net\/wms',
    dependencies: ['XLink_1_0'],
    typeInfos: [{
        localName: 'ContactAddress',
        propertyInfos: [{
            name: 'addressType',
            elementName: 'AddressType'
          }, {
            name: 'address',
            elementName: 'Address'
          }, {
            name: 'city',
            elementName: 'City'
          }, {
            name: 'stateOrProvince',
            elementName: 'StateOrProvince'
          }, {
            name: 'postCode',
            elementName: 'PostCode'
          }, {
            name: 'country',
            elementName: 'Country'
          }]
      }, {
        localName: 'WMSCapabilities',
        propertyInfos: [{
            name: 'service',
            elementName: 'Service',
            typeInfo: '.Service'
          }, {
            name: 'capability',
            elementName: 'Capability',
            typeInfo: '.Capability'
          }, {
            name: 'version',
            attributeName: {
              localPart: 'version'
            },
            type: 'attribute'
          }, {
            name: 'updateSequence',
            attributeName: {
              localPart: 'updateSequence'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Request',
        propertyInfos: [{
            name: 'getCapabilities',
            elementName: 'GetCapabilities',
            typeInfo: '.OperationType'
          }, {
            name: 'getMap',
            elementName: 'GetMap',
            typeInfo: '.OperationType'
          }, {
            name: 'getFeatureInfo',
            elementName: 'GetFeatureInfo',
            typeInfo: '.OperationType'
          }, {
            name: 'extendedOperation',
            collection: true,
            elementName: '_ExtendedOperation',
            typeInfo: '.OperationType'
          }]
      }, {
        localName: 'Dimension',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'name',
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }, {
            name: 'units',
            attributeName: {
              localPart: 'units'
            },
            type: 'attribute'
          }, {
            name: 'unitSymbol',
            attributeName: {
              localPart: 'unitSymbol'
            },
            type: 'attribute'
          }, {
            name: '_default',
            attributeName: {
              localPart: 'default'
            },
            type: 'attribute'
          }, {
            name: 'multipleValues',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'multipleValues'
            },
            type: 'attribute'
          }, {
            name: 'nearestValue',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'nearestValue'
            },
            type: 'attribute'
          }, {
            name: 'current',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'current'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'KeywordList',
        propertyInfos: [{
            name: 'keyword',
            collection: true,
            elementName: 'Keyword',
            typeInfo: '.Keyword'
          }]
      }, {
        localName: 'OnlineResource',
        propertyInfos: [{
            name: 'type',
            attributeName: {
              localPart: 'type',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }, {
            name: 'href',
            attributeName: {
              localPart: 'href',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }, {
            name: 'role',
            attributeName: {
              localPart: 'role',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }, {
            name: 'arcrole',
            attributeName: {
              localPart: 'arcrole',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }, {
            name: 'title',
            attributeName: {
              localPart: 'title',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }, {
            name: 'show',
            attributeName: {
              localPart: 'show',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }, {
            name: 'actuate',
            attributeName: {
              localPart: 'actuate',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Post',
        propertyInfos: [{
            name: 'onlineResource',
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }]
      }, {
        localName: 'LogoURL',
        propertyInfos: [{
            name: 'format',
            elementName: 'Format'
          }, {
            name: 'onlineResource',
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }, {
            name: 'width',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'width'
            },
            type: 'attribute'
          }, {
            name: 'height',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'height'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Capability',
        propertyInfos: [{
            name: 'request',
            elementName: 'Request',
            typeInfo: '.Request'
          }, {
            name: 'exception',
            elementName: 'Exception',
            typeInfo: '.Exception'
          }, {
            name: 'extendedCapabilities',
            collection: true,
            elementName: '_ExtendedCapabilities',
            typeInfo: 'AnyType'
          }, {
            name: 'layer',
            elementName: 'Layer',
            typeInfo: '.Layer'
          }]
      }, {
        localName: 'ContactPersonPrimary',
        propertyInfos: [{
            name: 'contactPerson',
            elementName: 'ContactPerson'
          }, {
            name: 'contactOrganization',
            elementName: 'ContactOrganization'
          }]
      }, {
        localName: 'Style',
        propertyInfos: [{
            name: 'name',
            elementName: 'Name'
          }, {
            name: 'title',
            elementName: 'Title'
          }, {
            name: '_abstract',
            elementName: 'Abstract'
          }, {
            name: 'legendURL',
            collection: true,
            elementName: 'LegendURL',
            typeInfo: '.LegendURL'
          }, {
            name: 'styleSheetURL',
            elementName: 'StyleSheetURL',
            typeInfo: '.StyleSheetURL'
          }, {
            name: 'styleURL',
            elementName: 'StyleURL',
            typeInfo: '.StyleURL'
          }]
      }, {
        localName: 'StyleURL',
        propertyInfos: [{
            name: 'format',
            elementName: 'Format'
          }, {
            name: 'onlineResource',
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }]
      }, {
        localName: 'HTTP',
        propertyInfos: [{
            name: 'get',
            elementName: 'Get',
            typeInfo: '.Get'
          }, {
            name: 'post',
            elementName: 'Post',
            typeInfo: '.Post'
          }]
      }, {
        localName: 'Keyword',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'vocabulary',
            attributeName: {
              localPart: 'vocabulary'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ContactInformation',
        propertyInfos: [{
            name: 'contactPersonPrimary',
            elementName: 'ContactPersonPrimary',
            typeInfo: '.ContactPersonPrimary'
          }, {
            name: 'contactPosition',
            elementName: 'ContactPosition'
          }, {
            name: 'contactAddress',
            elementName: 'ContactAddress',
            typeInfo: '.ContactAddress'
          }, {
            name: 'contactVoiceTelephone',
            elementName: 'ContactVoiceTelephone'
          }, {
            name: 'contactFacsimileTelephone',
            elementName: 'ContactFacsimileTelephone'
          }, {
            name: 'contactElectronicMailAddress',
            elementName: 'ContactElectronicMailAddress'
          }]
      }, {
        localName: 'StyleSheetURL',
        propertyInfos: [{
            name: 'format',
            elementName: 'Format'
          }, {
            name: 'onlineResource',
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }]
      }, {
        localName: 'AuthorityURL',
        propertyInfos: [{
            name: 'onlineResource',
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }, {
            name: 'name',
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Attribution',
        propertyInfos: [{
            name: 'title',
            elementName: 'Title'
          }, {
            name: 'onlineResource',
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }, {
            name: 'logoURL',
            elementName: 'LogoURL',
            typeInfo: '.LogoURL'
          }]
      }, {
        localName: 'FeatureListURL',
        propertyInfos: [{
            name: 'format',
            elementName: 'Format'
          }, {
            name: 'onlineResource',
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }]
      }, {
        localName: 'OperationType',
        propertyInfos: [{
            name: 'format',
            collection: true,
            elementName: 'Format'
          }, {
            name: 'dcpType',
            collection: true,
            elementName: 'DCPType',
            typeInfo: '.DCPType'
          }]
      }, {
        localName: 'Exception',
        propertyInfos: [{
            name: 'format',
            collection: true,
            elementName: 'Format'
          }]
      }, {
        localName: 'Service',
        propertyInfos: [{
            name: 'name',
            elementName: 'Name'
          }, {
            name: 'title',
            elementName: 'Title'
          }, {
            name: '_abstract',
            elementName: 'Abstract'
          }, {
            name: 'keywordList',
            elementName: 'KeywordList',
            typeInfo: '.KeywordList'
          }, {
            name: 'onlineResource',
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }, {
            name: 'contactInformation',
            elementName: 'ContactInformation',
            typeInfo: '.ContactInformation'
          }, {
            name: 'fees',
            elementName: 'Fees'
          }, {
            name: 'accessConstraints',
            elementName: 'AccessConstraints'
          }, {
            name: 'layerLimit',
            elementName: 'LayerLimit',
            typeInfo: 'Integer'
          }, {
            name: 'maxWidth',
            elementName: 'MaxWidth',
            typeInfo: 'Integer'
          }, {
            name: 'maxHeight',
            elementName: 'MaxHeight',
            typeInfo: 'Integer'
          }]
      }, {
        localName: 'Identifier',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'authority',
            attributeName: {
              localPart: 'authority'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Layer',
        propertyInfos: [{
            name: 'name',
            elementName: 'Name'
          }, {
            name: 'title',
            elementName: 'Title'
          }, {
            name: '_abstract',
            elementName: 'Abstract'
          }, {
            name: 'keywordList',
            elementName: 'KeywordList',
            typeInfo: '.KeywordList'
          }, {
            name: 'crs',
            collection: true,
            elementName: 'CRS'
          }, {
            name: 'exGeographicBoundingBox',
            elementName: 'EX_GeographicBoundingBox',
            typeInfo: '.EXGeographicBoundingBox'
          }, {
            name: 'boundingBox',
            collection: true,
            elementName: 'BoundingBox',
            typeInfo: '.BoundingBox'
          }, {
            name: 'dimension',
            collection: true,
            elementName: 'Dimension',
            typeInfo: '.Dimension'
          }, {
            name: 'attribution',
            elementName: 'Attribution',
            typeInfo: '.Attribution'
          }, {
            name: 'authorityURL',
            collection: true,
            elementName: 'AuthorityURL',
            typeInfo: '.AuthorityURL'
          }, {
            name: 'identifier',
            collection: true,
            elementName: 'Identifier',
            typeInfo: '.Identifier'
          }, {
            name: 'metadataURL',
            collection: true,
            elementName: 'MetadataURL',
            typeInfo: '.MetadataURL'
          }, {
            name: 'dataURL',
            collection: true,
            elementName: 'DataURL',
            typeInfo: '.DataURL'
          }, {
            name: 'featureListURL',
            collection: true,
            elementName: 'FeatureListURL',
            typeInfo: '.FeatureListURL'
          }, {
            name: 'style',
            collection: true,
            elementName: 'Style',
            typeInfo: '.Style'
          }, {
            name: 'minScaleDenominator',
            elementName: 'MinScaleDenominator',
            typeInfo: 'Double'
          }, {
            name: 'maxScaleDenominator',
            elementName: 'MaxScaleDenominator',
            typeInfo: 'Double'
          }, {
            name: 'layer',
            collection: true,
            elementName: 'Layer',
            typeInfo: '.Layer'
          }, {
            name: 'queryable',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'queryable'
            },
            type: 'attribute'
          }, {
            name: 'cascaded',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'cascaded'
            },
            type: 'attribute'
          }, {
            name: 'opaque',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'opaque'
            },
            type: 'attribute'
          }, {
            name: 'noSubsets',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'noSubsets'
            },
            type: 'attribute'
          }, {
            name: 'fixedWidth',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'fixedWidth'
            },
            type: 'attribute'
          }, {
            name: 'fixedHeight',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'fixedHeight'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DCPType',
        propertyInfos: [{
            name: 'http',
            elementName: 'HTTP',
            typeInfo: '.HTTP'
          }]
      }, {
        localName: 'BoundingBox',
        propertyInfos: [{
            name: 'crs',
            attributeName: {
              localPart: 'CRS'
            },
            type: 'attribute'
          }, {
            name: 'minx',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'minx'
            },
            type: 'attribute'
          }, {
            name: 'miny',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'miny'
            },
            type: 'attribute'
          }, {
            name: 'maxx',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'maxx'
            },
            type: 'attribute'
          }, {
            name: 'maxy',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'maxy'
            },
            type: 'attribute'
          }, {
            name: 'resx',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'resx'
            },
            type: 'attribute'
          }, {
            name: 'resy',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'resy'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DataURL',
        propertyInfos: [{
            name: 'format',
            elementName: 'Format'
          }, {
            name: 'onlineResource',
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }]
      }, {
        localName: 'MetadataURL',
        propertyInfos: [{
            name: 'format',
            elementName: 'Format'
          }, {
            name: 'onlineResource',
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }, {
            name: 'type',
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Get',
        propertyInfos: [{
            name: 'onlineResource',
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }]
      }, {
        localName: 'LegendURL',
        propertyInfos: [{
            name: 'format',
            elementName: 'Format'
          }, {
            name: 'onlineResource',
            elementName: 'OnlineResource',
            typeInfo: '.OnlineResource'
          }, {
            name: 'width',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'width'
            },
            type: 'attribute'
          }, {
            name: 'height',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'height'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'EXGeographicBoundingBox',
        propertyInfos: [{
            name: 'westBoundLongitude',
            typeInfo: 'Double'
          }, {
            name: 'eastBoundLongitude',
            typeInfo: 'Double'
          }, {
            name: 'southBoundLatitude',
            typeInfo: 'Double'
          }, {
            name: 'northBoundLatitude',
            typeInfo: 'Double'
          }]
      }],
    elementInfos: [{
        elementName: 'AccessConstraints'
      }, {
        elementName: 'StyleURL',
        typeInfo: '.StyleURL'
      }, {
        elementName: 'AuthorityURL',
        typeInfo: '.AuthorityURL'
      }, {
        elementName: 'Name'
      }, {
        elementName: 'Capability',
        typeInfo: '.Capability'
      }, {
        elementName: 'Service',
        typeInfo: '.Service'
      }, {
        elementName: 'WMS_Capabilities',
        typeInfo: '.WMSCapabilities'
      }, {
        elementName: 'GetCapabilities',
        typeInfo: '.OperationType'
      }, {
        elementName: '_ExtendedOperation',
        typeInfo: '.OperationType'
      }, {
        elementName: 'Address'
      }, {
        elementName: 'LegendURL',
        typeInfo: '.LegendURL'
      }, {
        elementName: 'ContactVoiceTelephone'
      }, {
        elementName: 'BoundingBox',
        typeInfo: '.BoundingBox'
      }, {
        elementName: 'PostCode'
      }, {
        elementName: 'Keyword',
        typeInfo: '.Keyword'
      }, {
        elementName: 'Post',
        typeInfo: '.Post'
      }, {
        elementName: 'Style',
        typeInfo: '.Style'
      }, {
        elementName: 'GetMap',
        typeInfo: '.OperationType'
      }, {
        elementName: 'Title'
      }, {
        elementName: 'City'
      }, {
        elementName: 'MetadataURL',
        typeInfo: '.MetadataURL'
      }, {
        elementName: 'FeatureListURL',
        typeInfo: '.FeatureListURL'
      }, {
        elementName: 'Attribution',
        typeInfo: '.Attribution'
      }, {
        elementName: 'ContactFacsimileTelephone'
      }, {
        elementName: 'LayerLimit',
        typeInfo: 'Integer'
      }, {
        elementName: 'CRS'
      }, {
        elementName: 'GetFeatureInfo',
        typeInfo: '.OperationType'
      }, {
        elementName: 'ContactElectronicMailAddress'
      }, {
        elementName: 'LogoURL',
        typeInfo: '.LogoURL'
      }, {
        elementName: 'Exception',
        typeInfo: '.Exception'
      }, {
        elementName: 'MaxWidth',
        typeInfo: 'Integer'
      }, {
        elementName: 'Request',
        typeInfo: '.Request'
      }, {
        elementName: 'EX_GeographicBoundingBox',
        typeInfo: '.EXGeographicBoundingBox'
      }, {
        elementName: 'DCPType',
        typeInfo: '.DCPType'
      }, {
        elementName: 'HTTP',
        typeInfo: '.HTTP'
      }, {
        elementName: 'Get',
        typeInfo: '.Get'
      }, {
        elementName: 'Abstract'
      }, {
        elementName: '_ExtendedCapabilities',
        typeInfo: 'AnyType'
      }, {
        elementName: 'KeywordList',
        typeInfo: '.KeywordList'
      }, {
        elementName: 'ContactAddress',
        typeInfo: '.ContactAddress'
      }, {
        elementName: 'Layer',
        typeInfo: '.Layer'
      }, {
        elementName: 'ContactPerson'
      }, {
        elementName: 'StateOrProvince'
      }, {
        elementName: 'MaxHeight',
        typeInfo: 'Integer'
      }, {
        elementName: 'Country'
      }, {
        elementName: 'Identifier',
        typeInfo: '.Identifier'
      }, {
        elementName: 'MaxScaleDenominator',
        typeInfo: 'Double'
      }, {
        elementName: 'MinScaleDenominator',
        typeInfo: 'Double'
      }, {
        elementName: 'Format'
      }, {
        elementName: 'DataURL',
        typeInfo: '.DataURL'
      }, {
        elementName: 'Fees'
      }, {
        elementName: 'ContactPersonPrimary',
        typeInfo: '.ContactPersonPrimary'
      }, {
        elementName: 'ContactOrganization'
      }, {
        elementName: 'StyleSheetURL',
        typeInfo: '.StyleSheetURL'
      }, {
        elementName: 'AddressType'
      }, {
        elementName: 'ContactInformation',
        typeInfo: '.ContactInformation'
      }, {
        elementName: 'Dimension',
        typeInfo: '.Dimension'
      }, {
        elementName: 'OnlineResource',
        typeInfo: '.OnlineResource'
      }, {
        elementName: 'ContactPosition'
      }]
  };
  var XLink_1_0 = {
    name: 'XLink_1_0',
    defaultElementNamespaceURI: 'http:\/\/www.w3.org\/1999\/xlink',
    defaultAttributeNamespaceURI: 'http:\/\/www.w3.org\/1999\/xlink',
    typeInfos: [{
        type: 'enumInfo',
        localName: 'ActuateType',
        values: ['onLoad', 'onRequest', 'other', 'none']
      }, {
        type: 'enumInfo',
        localName: 'ShowType',
        values: ['new', 'replace', 'embed', 'other', 'none']
      }, {
        type: 'enumInfo',
        localName: 'TypeType',
        values: ['simple', 'extended', 'title', 'resource', 'locator', 'arc']
      }],
    elementInfos: []
  };
  return {
    WMS_1_3_0: WMS_1_3_0,
    XLink_1_0: XLink_1_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], WMS_1_3_0_Full_Module_Factory);
}
else {
  var WMS_1_3_0_Full_Module = WMS_1_3_0_Full_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.WMS_1_3_0 = WMS_1_3_0_Full_Module.WMS_1_3_0;
    module.exports.XLink_1_0 = WMS_1_3_0_Full_Module.XLink_1_0;
  }
  else {
    var WMS_1_3_0 = WMS_1_3_0_Full_Module.WMS_1_3_0;
    var XLink_1_0 = WMS_1_3_0_Full_Module.XLink_1_0;
  }
}