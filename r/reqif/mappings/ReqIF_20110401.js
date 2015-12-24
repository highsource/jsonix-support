var ReqIF_20110401_Module_Factory = function () {
  var ReqIF_20110401 = {
    name: 'ReqIF_20110401',
    defaultElementNamespaceURI: 'http:\/\/www.omg.org\/spec\/ReqIF\/20110401\/reqif.xsd',
    dependencies: ['ReqIF_20110402_Driver'],
    typeInfos: [{
        localName: 'SPECOBJECT.VALUES',
        typeName: null,
        propertyInfos: [{
            name: 'attributevaluebooleanOrATTRIBUTEVALUEDATEOrATTRIBUTEVALUEENUMERATION',
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [{
                elementName: 'ATTRIBUTE-VALUE-BOOLEAN',
                typeInfo: '.ATTRIBUTEVALUEBOOLEAN'
              }, {
                elementName: 'ATTRIBUTE-VALUE-DATE',
                typeInfo: '.ATTRIBUTEVALUEDATE'
              }, {
                elementName: 'ATTRIBUTE-VALUE-ENUMERATION',
                typeInfo: '.ATTRIBUTEVALUEENUMERATION'
              }, {
                elementName: 'ATTRIBUTE-VALUE-INTEGER',
                typeInfo: '.ATTRIBUTEVALUEINTEGER'
              }, {
                elementName: 'ATTRIBUTE-VALUE-REAL',
                typeInfo: '.ATTRIBUTEVALUEREAL'
              }, {
                elementName: 'ATTRIBUTE-VALUE-STRING',
                typeInfo: '.ATTRIBUTEVALUESTRING'
              }, {
                elementName: 'ATTRIBUTE-VALUE-XHTML',
                typeInfo: '.ATTRIBUTEVALUEXHTML'
              }],
            type: 'elements'
          }]
      }, {
        localName: 'DATATYPEDEFINITIONREAL.ALTERNATIVEID',
        typeName: null,
        propertyInfos: [{
            name: 'alternativeid',
            required: true,
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ALTERNATIVEID'
          }]
      }, {
        localName: 'ATTRIBUTEVALUEENUMERATION',
        typeName: 'ATTRIBUTE-VALUE-ENUMERATION',
        propertyInfos: [{
            name: 'definition',
            required: true,
            elementName: 'DEFINITION',
            typeInfo: '.ATTRIBUTEVALUEENUMERATION.DEFINITION'
          }, {
            name: 'values',
            elementName: 'VALUES',
            typeInfo: '.ATTRIBUTEVALUEENUMERATION.VALUES'
          }]
      }, {
        localName: 'REQIFCONTENT.DATATYPES',
        typeName: null,
        propertyInfos: [{
            name: 'datatypedefinitionbooleanOrDATATYPEDEFINITIONDATEOrDATATYPEDEFINITIONENUMERATION',
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [{
                elementName: 'DATATYPE-DEFINITION-BOOLEAN',
                typeInfo: '.DATATYPEDEFINITIONBOOLEAN'
              }, {
                elementName: 'DATATYPE-DEFINITION-DATE',
                typeInfo: '.DATATYPEDEFINITIONDATE'
              }, {
                elementName: 'DATATYPE-DEFINITION-ENUMERATION',
                typeInfo: '.DATATYPEDEFINITIONENUMERATION'
              }, {
                elementName: 'DATATYPE-DEFINITION-INTEGER',
                typeInfo: '.DATATYPEDEFINITIONINTEGER'
              }, {
                elementName: 'DATATYPE-DEFINITION-REAL',
                typeInfo: '.DATATYPEDEFINITIONREAL'
              }, {
                elementName: 'DATATYPE-DEFINITION-STRING',
                typeInfo: '.DATATYPEDEFINITIONSTRING'
              }, {
                elementName: 'DATATYPE-DEFINITION-XHTML',
                typeInfo: '.DATATYPEDEFINITIONXHTML'
              }],
            type: 'elements'
          }]
      }, {
        localName: 'ALTERNATIVEID',
        typeName: 'ALTERNATIVE-ID',
        propertyInfos: [{
            name: 'identifier',
            required: true,
            attributeName: {
              localPart: 'IDENTIFIER'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'XHTMLCONTENT',
        typeName: 'XHTML-CONTENT',
        propertyInfos: [{
            name: 'p',
            required: true,
            elementName: {
              localPart: 'p',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xhtml'
            },
            typeInfo: 'ReqIF_20110402_Driver.XhtmlPType'
          }, {
            name: 'div',
            required: true,
            elementName: {
              localPart: 'div',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xhtml'
            },
            typeInfo: 'ReqIF_20110402_Driver.XhtmlDivType'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONSTRING',
        typeName: 'ATTRIBUTE-DEFINITION-STRING',
        propertyInfos: [{
            name: 'alternativeid',
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ATTRIBUTEDEFINITIONSTRING.ALTERNATIVEID'
          }, {
            name: 'defaultvalue',
            elementName: 'DEFAULT-VALUE',
            typeInfo: '.ATTRIBUTEDEFINITIONSTRING.DEFAULTVALUE'
          }, {
            name: 'type',
            required: true,
            elementName: 'TYPE',
            typeInfo: '.ATTRIBUTEDEFINITIONSTRING.TYPE'
          }, {
            name: 'desc',
            attributeName: {
              localPart: 'DESC'
            },
            type: 'attribute'
          }, {
            name: 'identifier',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'IDENTIFIER'
            },
            type: 'attribute'
          }, {
            name: 'iseditable',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'IS-EDITABLE'
            },
            type: 'attribute'
          }, {
            name: 'lastchange',
            required: true,
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'LAST-CHANGE'
            },
            type: 'attribute'
          }, {
            name: 'longname',
            attributeName: {
              localPart: 'LONG-NAME'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SPECRELATION.VALUES',
        typeName: null,
        propertyInfos: [{
            name: 'attributevaluebooleanOrATTRIBUTEVALUEDATEOrATTRIBUTEVALUEENUMERATION',
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [{
                elementName: 'ATTRIBUTE-VALUE-BOOLEAN',
                typeInfo: '.ATTRIBUTEVALUEBOOLEAN'
              }, {
                elementName: 'ATTRIBUTE-VALUE-DATE',
                typeInfo: '.ATTRIBUTEVALUEDATE'
              }, {
                elementName: 'ATTRIBUTE-VALUE-ENUMERATION',
                typeInfo: '.ATTRIBUTEVALUEENUMERATION'
              }, {
                elementName: 'ATTRIBUTE-VALUE-INTEGER',
                typeInfo: '.ATTRIBUTEVALUEINTEGER'
              }, {
                elementName: 'ATTRIBUTE-VALUE-REAL',
                typeInfo: '.ATTRIBUTEVALUEREAL'
              }, {
                elementName: 'ATTRIBUTE-VALUE-STRING',
                typeInfo: '.ATTRIBUTEVALUESTRING'
              }, {
                elementName: 'ATTRIBUTE-VALUE-XHTML',
                typeInfo: '.ATTRIBUTEVALUEXHTML'
              }],
            type: 'elements'
          }]
      }, {
        localName: 'SPECRELATION',
        typeName: 'SPEC-RELATION',
        propertyInfos: [{
            name: 'alternativeid',
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.SPECRELATION.ALTERNATIVEID'
          }, {
            name: 'values',
            elementName: 'VALUES',
            typeInfo: '.SPECRELATION.VALUES'
          }, {
            name: 'source',
            required: true,
            elementName: 'SOURCE',
            typeInfo: '.SPECRELATION.SOURCE'
          }, {
            name: 'target',
            required: true,
            elementName: 'TARGET',
            typeInfo: '.SPECRELATION.TARGET'
          }, {
            name: 'type',
            required: true,
            elementName: 'TYPE',
            typeInfo: '.SPECRELATION.TYPE'
          }, {
            name: 'desc',
            attributeName: {
              localPart: 'DESC'
            },
            type: 'attribute'
          }, {
            name: 'identifier',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'IDENTIFIER'
            },
            type: 'attribute'
          }, {
            name: 'lastchange',
            required: true,
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'LAST-CHANGE'
            },
            type: 'attribute'
          }, {
            name: 'longname',
            attributeName: {
              localPart: 'LONG-NAME'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SPECHIERARCHY.EDITABLEATTS',
        typeName: null,
        propertyInfos: [{
            name: 'attributedefinitionbooleanrefOrATTRIBUTEDEFINITIONDATEREFOrATTRIBUTEDEFINITIONENUMERATIONREF',
            minOccurs: 0,
            collection: true,
            mixed: false,
            allowDom: false,
            elementTypeInfos: [{
                elementName: 'ATTRIBUTE-DEFINITION-ENUMERATION-REF',
                typeInfo: 'IDREF'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-DATE-REF',
                typeInfo: 'IDREF'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-REAL-REF',
                typeInfo: 'IDREF'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-XHTML-REF',
                typeInfo: 'IDREF'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-STRING-REF',
                typeInfo: 'IDREF'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-INTEGER-REF',
                typeInfo: 'IDREF'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-BOOLEAN-REF',
                typeInfo: 'IDREF'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'SPECOBJECTTYPE.SPECATTRIBUTES',
        typeName: null,
        propertyInfos: [{
            name: 'attributedefinitionbooleanOrATTRIBUTEDEFINITIONDATEOrATTRIBUTEDEFINITIONENUMERATION',
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [{
                elementName: 'ATTRIBUTE-DEFINITION-BOOLEAN',
                typeInfo: '.ATTRIBUTEDEFINITIONBOOLEAN'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-DATE',
                typeInfo: '.ATTRIBUTEDEFINITIONDATE'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-ENUMERATION',
                typeInfo: '.ATTRIBUTEDEFINITIONENUMERATION'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-INTEGER',
                typeInfo: '.ATTRIBUTEDEFINITIONINTEGER'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-REAL',
                typeInfo: '.ATTRIBUTEDEFINITIONREAL'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-STRING',
                typeInfo: '.ATTRIBUTEDEFINITIONSTRING'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-XHTML',
                typeInfo: '.ATTRIBUTEDEFINITIONXHTML'
              }],
            type: 'elements'
          }]
      }, {
        localName: 'SPECHIERARCHY.CHILDREN',
        typeName: null,
        propertyInfos: [{
            name: 'spechierarchy',
            minOccurs: 0,
            collection: true,
            elementName: 'SPEC-HIERARCHY',
            typeInfo: '.SPECHIERARCHY'
          }]
      }, {
        localName: 'DATATYPEDEFINITIONENUMERATION',
        typeName: 'DATATYPE-DEFINITION-ENUMERATION',
        propertyInfos: [{
            name: 'alternativeid',
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.DATATYPEDEFINITIONENUMERATION.ALTERNATIVEID'
          }, {
            name: 'specifiedvalues',
            elementName: 'SPECIFIED-VALUES',
            typeInfo: '.DATATYPEDEFINITIONENUMERATION.SPECIFIEDVALUES'
          }, {
            name: 'desc',
            attributeName: {
              localPart: 'DESC'
            },
            type: 'attribute'
          }, {
            name: 'identifier',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'IDENTIFIER'
            },
            type: 'attribute'
          }, {
            name: 'lastchange',
            required: true,
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'LAST-CHANGE'
            },
            type: 'attribute'
          }, {
            name: 'longname',
            attributeName: {
              localPart: 'LONG-NAME'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONENUMERATION.ALTERNATIVEID',
        typeName: null,
        propertyInfos: [{
            name: 'alternativeid',
            required: true,
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ALTERNATIVEID'
          }]
      }, {
        localName: 'SPECOBJECTTYPE',
        typeName: 'SPEC-OBJECT-TYPE',
        propertyInfos: [{
            name: 'alternativeid',
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.SPECOBJECTTYPE.ALTERNATIVEID'
          }, {
            name: 'specattributes',
            elementName: 'SPEC-ATTRIBUTES',
            typeInfo: '.SPECOBJECTTYPE.SPECATTRIBUTES'
          }, {
            name: 'desc',
            attributeName: {
              localPart: 'DESC'
            },
            type: 'attribute'
          }, {
            name: 'identifier',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'IDENTIFIER'
            },
            type: 'attribute'
          }, {
            name: 'lastchange',
            required: true,
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'LAST-CHANGE'
            },
            type: 'attribute'
          }, {
            name: 'longname',
            attributeName: {
              localPart: 'LONG-NAME'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONREAL.TYPE',
        typeName: null,
        propertyInfos: [{
            name: 'datatypedefinitionrealref',
            required: true,
            elementName: 'DATATYPE-DEFINITION-REAL-REF',
            typeInfo: 'IDREF'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONREAL.DEFAULTVALUE',
        typeName: null,
        propertyInfos: [{
            name: 'attributevaluereal',
            required: true,
            elementName: 'ATTRIBUTE-VALUE-REAL',
            typeInfo: '.ATTRIBUTEVALUEREAL'
          }]
      }, {
        localName: 'DATATYPEDEFINITIONSTRING.ALTERNATIVEID',
        typeName: null,
        propertyInfos: [{
            name: 'alternativeid',
            required: true,
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ALTERNATIVEID'
          }]
      }, {
        localName: 'SPECIFICATIONTYPE',
        typeName: 'SPECIFICATION-TYPE',
        propertyInfos: [{
            name: 'alternativeid',
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.SPECIFICATIONTYPE.ALTERNATIVEID'
          }, {
            name: 'specattributes',
            elementName: 'SPEC-ATTRIBUTES',
            typeInfo: '.SPECIFICATIONTYPE.SPECATTRIBUTES'
          }, {
            name: 'desc',
            attributeName: {
              localPart: 'DESC'
            },
            type: 'attribute'
          }, {
            name: 'identifier',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'IDENTIFIER'
            },
            type: 'attribute'
          }, {
            name: 'lastchange',
            required: true,
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'LAST-CHANGE'
            },
            type: 'attribute'
          }, {
            name: 'longname',
            attributeName: {
              localPart: 'LONG-NAME'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DATATYPEDEFINITIONENUMERATION.SPECIFIEDVALUES',
        typeName: null,
        propertyInfos: [{
            name: 'enumvalue',
            minOccurs: 0,
            collection: true,
            elementName: 'ENUM-VALUE',
            typeInfo: '.ENUMVALUE'
          }]
      }, {
        localName: 'ENUMVALUE',
        typeName: 'ENUM-VALUE',
        propertyInfos: [{
            name: 'alternativeid',
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ENUMVALUE.ALTERNATIVEID'
          }, {
            name: 'properties',
            required: true,
            elementName: 'PROPERTIES',
            typeInfo: '.ENUMVALUE.PROPERTIES'
          }, {
            name: 'desc',
            attributeName: {
              localPart: 'DESC'
            },
            type: 'attribute'
          }, {
            name: 'identifier',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'IDENTIFIER'
            },
            type: 'attribute'
          }, {
            name: 'lastchange',
            required: true,
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'LAST-CHANGE'
            },
            type: 'attribute'
          }, {
            name: 'longname',
            attributeName: {
              localPart: 'LONG-NAME'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'REQIF',
        typeName: 'REQ-IF',
        propertyInfos: [{
            name: 'theheader',
            required: true,
            elementName: 'THE-HEADER',
            typeInfo: '.REQIF.THEHEADER'
          }, {
            name: 'corecontent',
            required: true,
            elementName: 'CORE-CONTENT',
            typeInfo: '.REQIF.CORECONTENT'
          }, {
            name: 'toolextensions',
            elementName: 'TOOL-EXTENSIONS',
            typeInfo: '.REQIF.TOOLEXTENSIONS'
          }, {
            name: 'lang',
            attributeName: {
              localPart: 'lang',
              namespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ATTRIBUTEVALUEINTEGER.DEFINITION',
        typeName: null,
        propertyInfos: [{
            name: 'attributedefinitionintegerref',
            required: true,
            elementName: 'ATTRIBUTE-DEFINITION-INTEGER-REF',
            typeInfo: 'IDREF'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONENUMERATION.TYPE',
        typeName: null,
        propertyInfos: [{
            name: 'datatypedefinitionenumerationref',
            required: true,
            elementName: 'DATATYPE-DEFINITION-ENUMERATION-REF',
            typeInfo: 'IDREF'
          }]
      }, {
        localName: 'SPECRELATION.TYPE',
        typeName: null,
        propertyInfos: [{
            name: 'specrelationtyperef',
            required: true,
            elementName: 'SPEC-RELATION-TYPE-REF',
            typeInfo: 'IDREF'
          }]
      }, {
        localName: 'REQIFCONTENT.SPECRELATIONS',
        typeName: null,
        propertyInfos: [{
            name: 'specrelation',
            minOccurs: 0,
            collection: true,
            elementName: 'SPEC-RELATION',
            typeInfo: '.SPECRELATION'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONXHTML.DEFAULTVALUE',
        typeName: null,
        propertyInfos: [{
            name: 'attributevaluexhtml',
            required: true,
            elementName: 'ATTRIBUTE-VALUE-XHTML',
            typeInfo: '.ATTRIBUTEVALUEXHTML'
          }]
      }, {
        localName: 'REQIFCONTENT.SPECOBJECTS',
        typeName: null,
        propertyInfos: [{
            name: 'specobject',
            minOccurs: 0,
            collection: true,
            elementName: 'SPEC-OBJECT',
            typeInfo: '.SPECOBJECT'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONSTRING.ALTERNATIVEID',
        typeName: null,
        propertyInfos: [{
            name: 'alternativeid',
            required: true,
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ALTERNATIVEID'
          }]
      }, {
        localName: 'SPECIFICATION',
        propertyInfos: [{
            name: 'alternativeid',
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.SPECIFICATION.ALTERNATIVEID'
          }, {
            name: 'values',
            elementName: 'VALUES',
            typeInfo: '.SPECIFICATION.VALUES'
          }, {
            name: 'children',
            elementName: 'CHILDREN',
            typeInfo: '.SPECIFICATION.CHILDREN'
          }, {
            name: 'type',
            required: true,
            elementName: 'TYPE',
            typeInfo: '.SPECIFICATION.TYPE'
          }, {
            name: 'desc',
            attributeName: {
              localPart: 'DESC'
            },
            type: 'attribute'
          }, {
            name: 'identifier',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'IDENTIFIER'
            },
            type: 'attribute'
          }, {
            name: 'lastchange',
            required: true,
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'LAST-CHANGE'
            },
            type: 'attribute'
          }, {
            name: 'longname',
            attributeName: {
              localPart: 'LONG-NAME'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DATATYPEDEFINITIONBOOLEAN.ALTERNATIVEID',
        typeName: null,
        propertyInfos: [{
            name: 'alternativeid',
            required: true,
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ALTERNATIVEID'
          }]
      }, {
        localName: 'SPECRELATIONTYPE.ALTERNATIVEID',
        typeName: null,
        propertyInfos: [{
            name: 'alternativeid',
            required: true,
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ALTERNATIVEID'
          }]
      }, {
        localName: 'RELATIONGROUP.ALTERNATIVEID',
        typeName: null,
        propertyInfos: [{
            name: 'alternativeid',
            required: true,
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ALTERNATIVEID'
          }]
      }, {
        localName: 'RELATIONGROUP.SOURCESPECIFICATION',
        typeName: null,
        propertyInfos: [{
            name: 'specificationref',
            required: true,
            elementName: 'SPECIFICATION-REF'
          }]
      }, {
        localName: 'EMBEDDEDVALUE',
        typeName: 'EMBEDDED-VALUE',
        propertyInfos: [{
            name: 'key',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'KEY'
            },
            type: 'attribute'
          }, {
            name: 'othercontent',
            required: true,
            attributeName: {
              localPart: 'OTHER-CONTENT'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONINTEGER',
        typeName: 'ATTRIBUTE-DEFINITION-INTEGER',
        propertyInfos: [{
            name: 'alternativeid',
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ATTRIBUTEDEFINITIONINTEGER.ALTERNATIVEID'
          }, {
            name: 'defaultvalue',
            elementName: 'DEFAULT-VALUE',
            typeInfo: '.ATTRIBUTEDEFINITIONINTEGER.DEFAULTVALUE'
          }, {
            name: 'type',
            required: true,
            elementName: 'TYPE',
            typeInfo: '.ATTRIBUTEDEFINITIONINTEGER.TYPE'
          }, {
            name: 'desc',
            attributeName: {
              localPart: 'DESC'
            },
            type: 'attribute'
          }, {
            name: 'identifier',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'IDENTIFIER'
            },
            type: 'attribute'
          }, {
            name: 'iseditable',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'IS-EDITABLE'
            },
            type: 'attribute'
          }, {
            name: 'lastchange',
            required: true,
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'LAST-CHANGE'
            },
            type: 'attribute'
          }, {
            name: 'longname',
            attributeName: {
              localPart: 'LONG-NAME'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONBOOLEAN.DEFAULTVALUE',
        typeName: null,
        propertyInfos: [{
            name: 'attributevalueboolean',
            required: true,
            elementName: 'ATTRIBUTE-VALUE-BOOLEAN',
            typeInfo: '.ATTRIBUTEVALUEBOOLEAN'
          }]
      }, {
        localName: 'REQIF.TOOLEXTENSIONS',
        typeName: null,
        propertyInfos: [{
            name: 'reqiftoolextension',
            minOccurs: 0,
            collection: true,
            elementName: 'REQ-IF-TOOL-EXTENSION',
            typeInfo: '.REQIFTOOLEXTENSION'
          }]
      }, {
        localName: 'REQIF.CORECONTENT',
        typeName: null,
        propertyInfos: [{
            name: 'reqifcontent',
            required: true,
            elementName: 'REQ-IF-CONTENT',
            typeInfo: '.REQIFCONTENT'
          }]
      }, {
        localName: 'DATATYPEDEFINITIONSTRING',
        typeName: 'DATATYPE-DEFINITION-STRING',
        propertyInfos: [{
            name: 'alternativeid',
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.DATATYPEDEFINITIONSTRING.ALTERNATIVEID'
          }, {
            name: 'desc',
            attributeName: {
              localPart: 'DESC'
            },
            type: 'attribute'
          }, {
            name: 'identifier',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'IDENTIFIER'
            },
            type: 'attribute'
          }, {
            name: 'lastchange',
            required: true,
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'LAST-CHANGE'
            },
            type: 'attribute'
          }, {
            name: 'longname',
            attributeName: {
              localPart: 'LONG-NAME'
            },
            type: 'attribute'
          }, {
            name: 'maxlength',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'MAX-LENGTH'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ATTRIBUTEVALUESTRING.DEFINITION',
        typeName: null,
        propertyInfos: [{
            name: 'attributedefinitionstringref',
            required: true,
            elementName: 'ATTRIBUTE-DEFINITION-STRING-REF',
            typeInfo: 'IDREF'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONREAL',
        typeName: 'ATTRIBUTE-DEFINITION-REAL',
        propertyInfos: [{
            name: 'alternativeid',
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ATTRIBUTEDEFINITIONREAL.ALTERNATIVEID'
          }, {
            name: 'defaultvalue',
            elementName: 'DEFAULT-VALUE',
            typeInfo: '.ATTRIBUTEDEFINITIONREAL.DEFAULTVALUE'
          }, {
            name: 'type',
            required: true,
            elementName: 'TYPE',
            typeInfo: '.ATTRIBUTEDEFINITIONREAL.TYPE'
          }, {
            name: 'desc',
            attributeName: {
              localPart: 'DESC'
            },
            type: 'attribute'
          }, {
            name: 'identifier',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'IDENTIFIER'
            },
            type: 'attribute'
          }, {
            name: 'iseditable',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'IS-EDITABLE'
            },
            type: 'attribute'
          }, {
            name: 'lastchange',
            required: true,
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'LAST-CHANGE'
            },
            type: 'attribute'
          }, {
            name: 'longname',
            attributeName: {
              localPart: 'LONG-NAME'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONDATE.DEFAULTVALUE',
        typeName: null,
        propertyInfos: [{
            name: 'attributevaluedate',
            required: true,
            elementName: 'ATTRIBUTE-VALUE-DATE',
            typeInfo: '.ATTRIBUTEVALUEDATE'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONXHTML',
        typeName: 'ATTRIBUTE-DEFINITION-XHTML',
        propertyInfos: [{
            name: 'alternativeid',
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ATTRIBUTEDEFINITIONXHTML.ALTERNATIVEID'
          }, {
            name: 'defaultvalue',
            elementName: 'DEFAULT-VALUE',
            typeInfo: '.ATTRIBUTEDEFINITIONXHTML.DEFAULTVALUE'
          }, {
            name: 'type',
            required: true,
            elementName: 'TYPE',
            typeInfo: '.ATTRIBUTEDEFINITIONXHTML.TYPE'
          }, {
            name: 'desc',
            attributeName: {
              localPart: 'DESC'
            },
            type: 'attribute'
          }, {
            name: 'identifier',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'IDENTIFIER'
            },
            type: 'attribute'
          }, {
            name: 'iseditable',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'IS-EDITABLE'
            },
            type: 'attribute'
          }, {
            name: 'lastchange',
            required: true,
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'LAST-CHANGE'
            },
            type: 'attribute'
          }, {
            name: 'longname',
            attributeName: {
              localPart: 'LONG-NAME'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SPECRELATION.ALTERNATIVEID',
        typeName: null,
        propertyInfos: [{
            name: 'alternativeid',
            required: true,
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ALTERNATIVEID'
          }]
      }, {
        localName: 'ATTRIBUTEVALUEENUMERATION.VALUES',
        typeName: null,
        propertyInfos: [{
            name: 'enumvalueref',
            minOccurs: 0,
            collection: true,
            mixed: false,
            allowDom: false,
            elementName: 'ENUM-VALUE-REF',
            typeInfo: 'IDREF',
            type: 'elementRef'
          }]
      }, {
        localName: 'ATTRIBUTEVALUEXHTML',
        typeName: 'ATTRIBUTE-VALUE-XHTML',
        propertyInfos: [{
            name: 'thevalue',
            required: true,
            elementName: 'THE-VALUE',
            typeInfo: '.XHTMLCONTENT'
          }, {
            name: 'theoriginalvalue',
            elementName: 'THE-ORIGINAL-VALUE',
            typeInfo: '.XHTMLCONTENT'
          }, {
            name: 'definition',
            required: true,
            elementName: 'DEFINITION',
            typeInfo: '.ATTRIBUTEVALUEXHTML.DEFINITION'
          }, {
            name: 'issimplified',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'IS-SIMPLIFIED'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONREAL.ALTERNATIVEID',
        typeName: null,
        propertyInfos: [{
            name: 'alternativeid',
            required: true,
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ALTERNATIVEID'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONINTEGER.ALTERNATIVEID',
        typeName: null,
        propertyInfos: [{
            name: 'alternativeid',
            required: true,
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ALTERNATIVEID'
          }]
      }, {
        localName: 'SPECRELATIONTYPE.SPECATTRIBUTES',
        typeName: null,
        propertyInfos: [{
            name: 'attributedefinitionbooleanOrATTRIBUTEDEFINITIONDATEOrATTRIBUTEDEFINITIONENUMERATION',
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [{
                elementName: 'ATTRIBUTE-DEFINITION-BOOLEAN',
                typeInfo: '.ATTRIBUTEDEFINITIONBOOLEAN'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-DATE',
                typeInfo: '.ATTRIBUTEDEFINITIONDATE'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-ENUMERATION',
                typeInfo: '.ATTRIBUTEDEFINITIONENUMERATION'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-INTEGER',
                typeInfo: '.ATTRIBUTEDEFINITIONINTEGER'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-REAL',
                typeInfo: '.ATTRIBUTEDEFINITIONREAL'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-STRING',
                typeInfo: '.ATTRIBUTEDEFINITIONSTRING'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-XHTML',
                typeInfo: '.ATTRIBUTEDEFINITIONXHTML'
              }],
            type: 'elements'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONENUMERATION',
        typeName: 'ATTRIBUTE-DEFINITION-ENUMERATION',
        propertyInfos: [{
            name: 'defaultvalue',
            elementName: 'DEFAULT-VALUE',
            typeInfo: '.ATTRIBUTEDEFINITIONENUMERATION.DEFAULTVALUE'
          }, {
            name: 'alternativeid',
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ATTRIBUTEDEFINITIONENUMERATION.ALTERNATIVEID'
          }, {
            name: 'type',
            required: true,
            elementName: 'TYPE',
            typeInfo: '.ATTRIBUTEDEFINITIONENUMERATION.TYPE'
          }, {
            name: 'desc',
            attributeName: {
              localPart: 'DESC'
            },
            type: 'attribute'
          }, {
            name: 'identifier',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'IDENTIFIER'
            },
            type: 'attribute'
          }, {
            name: 'iseditable',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'IS-EDITABLE'
            },
            type: 'attribute'
          }, {
            name: 'lastchange',
            required: true,
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'LAST-CHANGE'
            },
            type: 'attribute'
          }, {
            name: 'longname',
            attributeName: {
              localPart: 'LONG-NAME'
            },
            type: 'attribute'
          }, {
            name: 'multivalued',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'MULTI-VALUED'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DATATYPEDEFINITIONXHTML',
        typeName: 'DATATYPE-DEFINITION-XHTML',
        propertyInfos: [{
            name: 'alternativeid',
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.DATATYPEDEFINITIONXHTML.ALTERNATIVEID'
          }, {
            name: 'desc',
            attributeName: {
              localPart: 'DESC'
            },
            type: 'attribute'
          }, {
            name: 'identifier',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'IDENTIFIER'
            },
            type: 'attribute'
          }, {
            name: 'lastchange',
            required: true,
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'LAST-CHANGE'
            },
            type: 'attribute'
          }, {
            name: 'longname',
            attributeName: {
              localPart: 'LONG-NAME'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ENUMVALUE.PROPERTIES',
        typeName: null,
        propertyInfos: [{
            name: 'embeddedvalue',
            required: true,
            elementName: 'EMBEDDED-VALUE',
            typeInfo: '.EMBEDDEDVALUE'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONBOOLEAN.TYPE',
        typeName: null,
        propertyInfos: [{
            name: 'datatypedefinitionbooleanref',
            required: true,
            elementName: 'DATATYPE-DEFINITION-BOOLEAN-REF',
            typeInfo: 'IDREF'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONINTEGER.TYPE',
        typeName: null,
        propertyInfos: [{
            name: 'datatypedefinitionintegerref',
            required: true,
            elementName: 'DATATYPE-DEFINITION-INTEGER-REF',
            typeInfo: 'IDREF'
          }]
      }, {
        localName: 'SPECOBJECT',
        typeName: 'SPEC-OBJECT',
        propertyInfos: [{
            name: 'alternativeid',
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.SPECOBJECT.ALTERNATIVEID'
          }, {
            name: 'values',
            elementName: 'VALUES',
            typeInfo: '.SPECOBJECT.VALUES'
          }, {
            name: 'type',
            required: true,
            elementName: 'TYPE',
            typeInfo: '.SPECOBJECT.TYPE'
          }, {
            name: 'desc',
            attributeName: {
              localPart: 'DESC'
            },
            type: 'attribute'
          }, {
            name: 'identifier',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'IDENTIFIER'
            },
            type: 'attribute'
          }, {
            name: 'lastchange',
            required: true,
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'LAST-CHANGE'
            },
            type: 'attribute'
          }, {
            name: 'longname',
            attributeName: {
              localPart: 'LONG-NAME'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SPECOBJECT.ALTERNATIVEID',
        typeName: null,
        propertyInfos: [{
            name: 'alternativeid',
            required: true,
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ALTERNATIVEID'
          }]
      }, {
        localName: 'RELATIONGROUP.TARGETSPECIFICATION',
        typeName: null,
        propertyInfos: [{
            name: 'specificationref',
            required: true,
            elementName: 'SPECIFICATION-REF'
          }]
      }, {
        localName: 'DATATYPEDEFINITIONXHTML.ALTERNATIVEID',
        typeName: null,
        propertyInfos: [{
            name: 'alternativeid',
            required: true,
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ALTERNATIVEID'
          }]
      }, {
        localName: 'SPECIFICATION.VALUES',
        typeName: null,
        propertyInfos: [{
            name: 'attributevaluebooleanOrATTRIBUTEVALUEDATEOrATTRIBUTEVALUEENUMERATION',
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [{
                elementName: 'ATTRIBUTE-VALUE-BOOLEAN',
                typeInfo: '.ATTRIBUTEVALUEBOOLEAN'
              }, {
                elementName: 'ATTRIBUTE-VALUE-DATE',
                typeInfo: '.ATTRIBUTEVALUEDATE'
              }, {
                elementName: 'ATTRIBUTE-VALUE-ENUMERATION',
                typeInfo: '.ATTRIBUTEVALUEENUMERATION'
              }, {
                elementName: 'ATTRIBUTE-VALUE-INTEGER',
                typeInfo: '.ATTRIBUTEVALUEINTEGER'
              }, {
                elementName: 'ATTRIBUTE-VALUE-REAL',
                typeInfo: '.ATTRIBUTEVALUEREAL'
              }, {
                elementName: 'ATTRIBUTE-VALUE-STRING',
                typeInfo: '.ATTRIBUTEVALUESTRING'
              }, {
                elementName: 'ATTRIBUTE-VALUE-XHTML',
                typeInfo: '.ATTRIBUTEVALUEXHTML'
              }],
            type: 'elements'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONXHTML.ALTERNATIVEID',
        typeName: null,
        propertyInfos: [{
            name: 'alternativeid',
            required: true,
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ALTERNATIVEID'
          }]
      }, {
        localName: 'SPECOBJECT.TYPE',
        typeName: null,
        propertyInfos: [{
            name: 'specobjecttyperef',
            required: true,
            elementName: 'SPEC-OBJECT-TYPE-REF',
            typeInfo: 'IDREF'
          }]
      }, {
        localName: 'REQIFCONTENT',
        typeName: 'REQ-IF-CONTENT',
        propertyInfos: [{
            name: 'datatypes',
            elementName: 'DATATYPES',
            typeInfo: '.REQIFCONTENT.DATATYPES'
          }, {
            name: 'spectypes',
            elementName: 'SPEC-TYPES',
            typeInfo: '.REQIFCONTENT.SPECTYPES'
          }, {
            name: 'specobjects',
            elementName: 'SPEC-OBJECTS',
            typeInfo: '.REQIFCONTENT.SPECOBJECTS'
          }, {
            name: 'specrelations',
            elementName: 'SPEC-RELATIONS',
            typeInfo: '.REQIFCONTENT.SPECRELATIONS'
          }, {
            name: 'specifications',
            elementName: 'SPECIFICATIONS',
            typeInfo: '.REQIFCONTENT.SPECIFICATIONS'
          }, {
            name: 'specrelationgroups',
            elementName: 'SPEC-RELATION-GROUPS',
            typeInfo: '.REQIFCONTENT.SPECRELATIONGROUPS'
          }]
      }, {
        localName: 'REQIFTOOLEXTENSION',
        typeName: 'REQ-IF-TOOL-EXTENSION',
        propertyInfos: [{
            name: 'any',
            minOccurs: 0,
            collection: true,
            mixed: false,
            type: 'anyElement'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONDATE',
        typeName: 'ATTRIBUTE-DEFINITION-DATE',
        propertyInfos: [{
            name: 'alternativeid',
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ATTRIBUTEDEFINITIONDATE.ALTERNATIVEID'
          }, {
            name: 'defaultvalue',
            elementName: 'DEFAULT-VALUE',
            typeInfo: '.ATTRIBUTEDEFINITIONDATE.DEFAULTVALUE'
          }, {
            name: 'type',
            required: true,
            elementName: 'TYPE',
            typeInfo: '.ATTRIBUTEDEFINITIONDATE.TYPE'
          }, {
            name: 'desc',
            attributeName: {
              localPart: 'DESC'
            },
            type: 'attribute'
          }, {
            name: 'identifier',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'IDENTIFIER'
            },
            type: 'attribute'
          }, {
            name: 'iseditable',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'IS-EDITABLE'
            },
            type: 'attribute'
          }, {
            name: 'lastchange',
            required: true,
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'LAST-CHANGE'
            },
            type: 'attribute'
          }, {
            name: 'longname',
            attributeName: {
              localPart: 'LONG-NAME'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'REQIFCONTENT.SPECRELATIONGROUPS',
        typeName: null,
        propertyInfos: [{
            name: 'relationgroup',
            minOccurs: 0,
            collection: true,
            elementName: 'RELATION-GROUP',
            typeInfo: '.RELATIONGROUP'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONINTEGER.DEFAULTVALUE',
        typeName: null,
        propertyInfos: [{
            name: 'attributevalueinteger',
            required: true,
            elementName: 'ATTRIBUTE-VALUE-INTEGER',
            typeInfo: '.ATTRIBUTEVALUEINTEGER'
          }]
      }, {
        localName: 'SPECRELATION.TARGET',
        typeName: null,
        propertyInfos: [{
            name: 'specobjectref',
            required: true,
            elementName: 'SPEC-OBJECT-REF'
          }]
      }, {
        localName: 'DATATYPEDEFINITIONDATE',
        typeName: 'DATATYPE-DEFINITION-DATE',
        propertyInfos: [{
            name: 'alternativeid',
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.DATATYPEDEFINITIONDATE.ALTERNATIVEID'
          }, {
            name: 'desc',
            attributeName: {
              localPart: 'DESC'
            },
            type: 'attribute'
          }, {
            name: 'identifier',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'IDENTIFIER'
            },
            type: 'attribute'
          }, {
            name: 'lastchange',
            required: true,
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'LAST-CHANGE'
            },
            type: 'attribute'
          }, {
            name: 'longname',
            attributeName: {
              localPart: 'LONG-NAME'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SPECIFICATIONTYPE.SPECATTRIBUTES',
        typeName: null,
        propertyInfos: [{
            name: 'attributedefinitionbooleanOrATTRIBUTEDEFINITIONDATEOrATTRIBUTEDEFINITIONENUMERATION',
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [{
                elementName: 'ATTRIBUTE-DEFINITION-BOOLEAN',
                typeInfo: '.ATTRIBUTEDEFINITIONBOOLEAN'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-DATE',
                typeInfo: '.ATTRIBUTEDEFINITIONDATE'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-ENUMERATION',
                typeInfo: '.ATTRIBUTEDEFINITIONENUMERATION'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-INTEGER',
                typeInfo: '.ATTRIBUTEDEFINITIONINTEGER'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-REAL',
                typeInfo: '.ATTRIBUTEDEFINITIONREAL'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-STRING',
                typeInfo: '.ATTRIBUTEDEFINITIONSTRING'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-XHTML',
                typeInfo: '.ATTRIBUTEDEFINITIONXHTML'
              }],
            type: 'elements'
          }]
      }, {
        localName: 'ATTRIBUTEVALUEBOOLEAN.DEFINITION',
        typeName: null,
        propertyInfos: [{
            name: 'attributedefinitionbooleanref',
            required: true,
            elementName: 'ATTRIBUTE-DEFINITION-BOOLEAN-REF',
            typeInfo: 'IDREF'
          }]
      }, {
        localName: 'DATATYPEDEFINITIONDATE.ALTERNATIVEID',
        typeName: null,
        propertyInfos: [{
            name: 'alternativeid',
            required: true,
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ALTERNATIVEID'
          }]
      }, {
        localName: 'ATTRIBUTEVALUEBOOLEAN',
        typeName: 'ATTRIBUTE-VALUE-BOOLEAN',
        propertyInfos: [{
            name: 'definition',
            required: true,
            elementName: 'DEFINITION',
            typeInfo: '.ATTRIBUTEVALUEBOOLEAN.DEFINITION'
          }, {
            name: 'thevalue',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'THE-VALUE'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'RELATIONGROUP.TYPE',
        typeName: null,
        propertyInfos: [{
            name: 'relationgrouptyperef',
            required: true,
            elementName: 'RELATION-GROUP-TYPE-REF',
            typeInfo: 'IDREF'
          }]
      }, {
        localName: 'SPECIFICATION.TYPE',
        typeName: null,
        propertyInfos: [{
            name: 'specificationtyperef',
            required: true,
            elementName: 'SPECIFICATION-TYPE-REF',
            typeInfo: 'IDREF'
          }]
      }, {
        localName: 'REQIF.THEHEADER',
        typeName: null,
        propertyInfos: [{
            name: 'reqifheader',
            required: true,
            elementName: 'REQ-IF-HEADER',
            typeInfo: '.REQIFHEADER'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONBOOLEAN',
        typeName: 'ATTRIBUTE-DEFINITION-BOOLEAN',
        propertyInfos: [{
            name: 'alternativeid',
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ATTRIBUTEDEFINITIONBOOLEAN.ALTERNATIVEID'
          }, {
            name: 'defaultvalue',
            elementName: 'DEFAULT-VALUE',
            typeInfo: '.ATTRIBUTEDEFINITIONBOOLEAN.DEFAULTVALUE'
          }, {
            name: 'type',
            required: true,
            elementName: 'TYPE',
            typeInfo: '.ATTRIBUTEDEFINITIONBOOLEAN.TYPE'
          }, {
            name: 'desc',
            attributeName: {
              localPart: 'DESC'
            },
            type: 'attribute'
          }, {
            name: 'identifier',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'IDENTIFIER'
            },
            type: 'attribute'
          }, {
            name: 'iseditable',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'IS-EDITABLE'
            },
            type: 'attribute'
          }, {
            name: 'lastchange',
            required: true,
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'LAST-CHANGE'
            },
            type: 'attribute'
          }, {
            name: 'longname',
            attributeName: {
              localPart: 'LONG-NAME'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SPECIFICATION.ALTERNATIVEID',
        typeName: null,
        propertyInfos: [{
            name: 'alternativeid',
            required: true,
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ALTERNATIVEID'
          }]
      }, {
        localName: 'SPECHIERARCHY',
        typeName: 'SPEC-HIERARCHY',
        propertyInfos: [{
            name: 'alternativeid',
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.SPECHIERARCHY.ALTERNATIVEID'
          }, {
            name: 'children',
            elementName: 'CHILDREN',
            typeInfo: '.SPECHIERARCHY.CHILDREN'
          }, {
            name: 'editableatts',
            elementName: 'EDITABLE-ATTS',
            typeInfo: '.SPECHIERARCHY.EDITABLEATTS'
          }, {
            name: 'object',
            required: true,
            elementName: 'OBJECT',
            typeInfo: '.SPECHIERARCHY.OBJECT'
          }, {
            name: 'desc',
            attributeName: {
              localPart: 'DESC'
            },
            type: 'attribute'
          }, {
            name: 'identifier',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'IDENTIFIER'
            },
            type: 'attribute'
          }, {
            name: 'iseditable',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'IS-EDITABLE'
            },
            type: 'attribute'
          }, {
            name: 'istableinternal',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'IS-TABLE-INTERNAL'
            },
            type: 'attribute'
          }, {
            name: 'lastchange',
            required: true,
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'LAST-CHANGE'
            },
            type: 'attribute'
          }, {
            name: 'longname',
            attributeName: {
              localPart: 'LONG-NAME'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONXHTML.TYPE',
        typeName: null,
        propertyInfos: [{
            name: 'datatypedefinitionxhtmlref',
            required: true,
            elementName: 'DATATYPE-DEFINITION-XHTML-REF',
            typeInfo: 'IDREF'
          }]
      }, {
        localName: 'SPECHIERARCHY.OBJECT',
        typeName: null,
        propertyInfos: [{
            name: 'specobjectref',
            required: true,
            elementName: 'SPEC-OBJECT-REF',
            typeInfo: 'IDREF'
          }]
      }, {
        localName: 'ENUMVALUE.ALTERNATIVEID',
        typeName: null,
        propertyInfos: [{
            name: 'alternativeid',
            required: true,
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ALTERNATIVEID'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONSTRING.TYPE',
        typeName: null,
        propertyInfos: [{
            name: 'datatypedefinitionstringref',
            required: true,
            elementName: 'DATATYPE-DEFINITION-STRING-REF',
            typeInfo: 'IDREF'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONDATE.TYPE',
        typeName: null,
        propertyInfos: [{
            name: 'datatypedefinitiondateref',
            required: true,
            elementName: 'DATATYPE-DEFINITION-DATE-REF',
            typeInfo: 'IDREF'
          }]
      }, {
        localName: 'ATTRIBUTEVALUEENUMERATION.DEFINITION',
        typeName: null,
        propertyInfos: [{
            name: 'attributedefinitionenumerationref',
            required: true,
            elementName: 'ATTRIBUTE-DEFINITION-ENUMERATION-REF',
            typeInfo: 'IDREF'
          }]
      }, {
        localName: 'ATTRIBUTEVALUEREAL.DEFINITION',
        typeName: null,
        propertyInfos: [{
            name: 'attributedefinitionrealref',
            required: true,
            elementName: 'ATTRIBUTE-DEFINITION-REAL-REF',
            typeInfo: 'IDREF'
          }]
      }, {
        localName: 'ATTRIBUTEVALUEXHTML.DEFINITION',
        typeName: null,
        propertyInfos: [{
            name: 'attributedefinitionxhtmlref',
            required: true,
            elementName: 'ATTRIBUTE-DEFINITION-XHTML-REF',
            typeInfo: 'IDREF'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONBOOLEAN.ALTERNATIVEID',
        typeName: null,
        propertyInfos: [{
            name: 'alternativeid',
            required: true,
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ALTERNATIVEID'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONENUMERATION.DEFAULTVALUE',
        typeName: null,
        propertyInfos: [{
            name: 'attributevalueenumeration',
            required: true,
            elementName: 'ATTRIBUTE-VALUE-ENUMERATION',
            typeInfo: '.ATTRIBUTEVALUEENUMERATION'
          }]
      }, {
        localName: 'ATTRIBUTEVALUEINTEGER',
        typeName: 'ATTRIBUTE-VALUE-INTEGER',
        propertyInfos: [{
            name: 'definition',
            required: true,
            elementName: 'DEFINITION',
            typeInfo: '.ATTRIBUTEVALUEINTEGER.DEFINITION'
          }, {
            name: 'thevalue',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'THE-VALUE'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ATTRIBUTEVALUESTRING',
        typeName: 'ATTRIBUTE-VALUE-STRING',
        propertyInfos: [{
            name: 'definition',
            required: true,
            elementName: 'DEFINITION',
            typeInfo: '.ATTRIBUTEVALUESTRING.DEFINITION'
          }, {
            name: 'thevalue',
            required: true,
            attributeName: {
              localPart: 'THE-VALUE'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SPECRELATION.SOURCE',
        typeName: null,
        propertyInfos: [{
            name: 'specobjectref',
            required: true,
            elementName: 'SPEC-OBJECT-REF'
          }]
      }, {
        localName: 'ATTRIBUTEVALUEDATE',
        typeName: 'ATTRIBUTE-VALUE-DATE',
        propertyInfos: [{
            name: 'definition',
            required: true,
            elementName: 'DEFINITION',
            typeInfo: '.ATTRIBUTEVALUEDATE.DEFINITION'
          }, {
            name: 'thevalue',
            required: true,
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'THE-VALUE'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ATTRIBUTEVALUEREAL',
        typeName: 'ATTRIBUTE-VALUE-REAL',
        propertyInfos: [{
            name: 'definition',
            required: true,
            elementName: 'DEFINITION',
            typeInfo: '.ATTRIBUTEVALUEREAL.DEFINITION'
          }, {
            name: 'thevalue',
            required: true,
            typeInfo: 'Double',
            attributeName: {
              localPart: 'THE-VALUE'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SPECOBJECTTYPE.ALTERNATIVEID',
        typeName: null,
        propertyInfos: [{
            name: 'alternativeid',
            required: true,
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ALTERNATIVEID'
          }]
      }, {
        localName: 'DATATYPEDEFINITIONINTEGER.ALTERNATIVEID',
        typeName: null,
        propertyInfos: [{
            name: 'alternativeid',
            required: true,
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ALTERNATIVEID'
          }]
      }, {
        localName: 'RELATIONGROUP',
        typeName: 'RELATION-GROUP',
        propertyInfos: [{
            name: 'alternativeid',
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.RELATIONGROUP.ALTERNATIVEID'
          }, {
            name: 'sourcespecification',
            required: true,
            elementName: 'SOURCE-SPECIFICATION',
            typeInfo: '.RELATIONGROUP.SOURCESPECIFICATION'
          }, {
            name: 'specrelations',
            elementName: 'SPEC-RELATIONS',
            typeInfo: '.RELATIONGROUP.SPECRELATIONS'
          }, {
            name: 'targetspecification',
            required: true,
            elementName: 'TARGET-SPECIFICATION',
            typeInfo: '.RELATIONGROUP.TARGETSPECIFICATION'
          }, {
            name: 'type',
            required: true,
            elementName: 'TYPE',
            typeInfo: '.RELATIONGROUP.TYPE'
          }, {
            name: 'desc',
            attributeName: {
              localPart: 'DESC'
            },
            type: 'attribute'
          }, {
            name: 'identifier',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'IDENTIFIER'
            },
            type: 'attribute'
          }, {
            name: 'lastchange',
            required: true,
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'LAST-CHANGE'
            },
            type: 'attribute'
          }, {
            name: 'longname',
            attributeName: {
              localPart: 'LONG-NAME'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONDATE.ALTERNATIVEID',
        typeName: null,
        propertyInfos: [{
            name: 'alternativeid',
            required: true,
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ALTERNATIVEID'
          }]
      }, {
        localName: 'SPECIFICATION.CHILDREN',
        typeName: null,
        propertyInfos: [{
            name: 'spechierarchy',
            minOccurs: 0,
            collection: true,
            elementName: 'SPEC-HIERARCHY',
            typeInfo: '.SPECHIERARCHY'
          }]
      }, {
        localName: 'RELATIONGROUPTYPE.ALTERNATIVEID',
        typeName: null,
        propertyInfos: [{
            name: 'alternativeid',
            required: true,
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ALTERNATIVEID'
          }]
      }, {
        localName: 'DATATYPEDEFINITIONENUMERATION.ALTERNATIVEID',
        typeName: null,
        propertyInfos: [{
            name: 'alternativeid',
            required: true,
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ALTERNATIVEID'
          }]
      }, {
        localName: 'ATTRIBUTEVALUEDATE.DEFINITION',
        typeName: null,
        propertyInfos: [{
            name: 'attributedefinitiondateref',
            required: true,
            elementName: 'ATTRIBUTE-DEFINITION-DATE-REF',
            typeInfo: 'IDREF'
          }]
      }, {
        localName: 'RELATIONGROUPTYPE',
        typeName: 'RELATION-GROUP-TYPE',
        propertyInfos: [{
            name: 'alternativeid',
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.RELATIONGROUPTYPE.ALTERNATIVEID'
          }, {
            name: 'specattributes',
            elementName: 'SPEC-ATTRIBUTES',
            typeInfo: '.RELATIONGROUPTYPE.SPECATTRIBUTES'
          }, {
            name: 'desc',
            attributeName: {
              localPart: 'DESC'
            },
            type: 'attribute'
          }, {
            name: 'identifier',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'IDENTIFIER'
            },
            type: 'attribute'
          }, {
            name: 'lastchange',
            required: true,
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'LAST-CHANGE'
            },
            type: 'attribute'
          }, {
            name: 'longname',
            attributeName: {
              localPart: 'LONG-NAME'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'REQIFHEADER',
        typeName: 'REQ-IF-HEADER',
        propertyInfos: [{
            name: 'comment',
            elementName: 'COMMENT'
          }, {
            name: 'creationtime',
            required: true,
            elementName: 'CREATION-TIME',
            typeInfo: 'Calendar'
          }, {
            name: 'repositoryid',
            elementName: 'REPOSITORY-ID'
          }, {
            name: 'reqiftoolid',
            required: true,
            elementName: 'REQ-IF-TOOL-ID'
          }, {
            name: 'reqifversion',
            required: true,
            elementName: 'REQ-IF-VERSION'
          }, {
            name: 'sourcetoolid',
            required: true,
            elementName: 'SOURCE-TOOL-ID'
          }, {
            name: 'title',
            required: true,
            elementName: 'TITLE'
          }, {
            name: 'identifier',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'IDENTIFIER'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'RELATIONGROUP.SPECRELATIONS',
        typeName: null,
        propertyInfos: [{
            name: 'specrelationref',
            minOccurs: 0,
            collection: true,
            mixed: false,
            allowDom: false,
            elementName: 'SPEC-RELATION-REF',
            typeInfo: 'IDREF',
            type: 'elementRef'
          }]
      }, {
        localName: 'SPECIFICATIONTYPE.ALTERNATIVEID',
        typeName: null,
        propertyInfos: [{
            name: 'alternativeid',
            required: true,
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ALTERNATIVEID'
          }]
      }, {
        localName: 'RELATIONGROUPTYPE.SPECATTRIBUTES',
        typeName: null,
        propertyInfos: [{
            name: 'attributedefinitionbooleanOrATTRIBUTEDEFINITIONDATEOrATTRIBUTEDEFINITIONENUMERATION',
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [{
                elementName: 'ATTRIBUTE-DEFINITION-BOOLEAN',
                typeInfo: '.ATTRIBUTEDEFINITIONBOOLEAN'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-DATE',
                typeInfo: '.ATTRIBUTEDEFINITIONDATE'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-ENUMERATION',
                typeInfo: '.ATTRIBUTEDEFINITIONENUMERATION'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-INTEGER',
                typeInfo: '.ATTRIBUTEDEFINITIONINTEGER'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-REAL',
                typeInfo: '.ATTRIBUTEDEFINITIONREAL'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-STRING',
                typeInfo: '.ATTRIBUTEDEFINITIONSTRING'
              }, {
                elementName: 'ATTRIBUTE-DEFINITION-XHTML',
                typeInfo: '.ATTRIBUTEDEFINITIONXHTML'
              }],
            type: 'elements'
          }]
      }, {
        localName: 'REQIFCONTENT.SPECIFICATIONS',
        typeName: null,
        propertyInfos: [{
            name: 'specification',
            minOccurs: 0,
            collection: true,
            elementName: 'SPECIFICATION',
            typeInfo: '.SPECIFICATION'
          }]
      }, {
        localName: 'DATATYPEDEFINITIONINTEGER',
        typeName: 'DATATYPE-DEFINITION-INTEGER',
        propertyInfos: [{
            name: 'alternativeid',
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.DATATYPEDEFINITIONINTEGER.ALTERNATIVEID'
          }, {
            name: 'desc',
            attributeName: {
              localPart: 'DESC'
            },
            type: 'attribute'
          }, {
            name: 'identifier',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'IDENTIFIER'
            },
            type: 'attribute'
          }, {
            name: 'lastchange',
            required: true,
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'LAST-CHANGE'
            },
            type: 'attribute'
          }, {
            name: 'longname',
            attributeName: {
              localPart: 'LONG-NAME'
            },
            type: 'attribute'
          }, {
            name: 'max',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'MAX'
            },
            type: 'attribute'
          }, {
            name: 'min',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'MIN'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SPECRELATIONTYPE',
        typeName: 'SPEC-RELATION-TYPE',
        propertyInfos: [{
            name: 'alternativeid',
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.SPECRELATIONTYPE.ALTERNATIVEID'
          }, {
            name: 'specattributes',
            elementName: 'SPEC-ATTRIBUTES',
            typeInfo: '.SPECRELATIONTYPE.SPECATTRIBUTES'
          }, {
            name: 'desc',
            attributeName: {
              localPart: 'DESC'
            },
            type: 'attribute'
          }, {
            name: 'identifier',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'IDENTIFIER'
            },
            type: 'attribute'
          }, {
            name: 'lastchange',
            required: true,
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'LAST-CHANGE'
            },
            type: 'attribute'
          }, {
            name: 'longname',
            attributeName: {
              localPart: 'LONG-NAME'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DATATYPEDEFINITIONBOOLEAN',
        typeName: 'DATATYPE-DEFINITION-BOOLEAN',
        propertyInfos: [{
            name: 'alternativeid',
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.DATATYPEDEFINITIONBOOLEAN.ALTERNATIVEID'
          }, {
            name: 'desc',
            attributeName: {
              localPart: 'DESC'
            },
            type: 'attribute'
          }, {
            name: 'identifier',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'IDENTIFIER'
            },
            type: 'attribute'
          }, {
            name: 'lastchange',
            required: true,
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'LAST-CHANGE'
            },
            type: 'attribute'
          }, {
            name: 'longname',
            attributeName: {
              localPart: 'LONG-NAME'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DATATYPEDEFINITIONREAL',
        typeName: 'DATATYPE-DEFINITION-REAL',
        propertyInfos: [{
            name: 'alternativeid',
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.DATATYPEDEFINITIONREAL.ALTERNATIVEID'
          }, {
            name: 'accuracy',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'ACCURACY'
            },
            type: 'attribute'
          }, {
            name: 'desc',
            attributeName: {
              localPart: 'DESC'
            },
            type: 'attribute'
          }, {
            name: 'identifier',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'IDENTIFIER'
            },
            type: 'attribute'
          }, {
            name: 'lastchange',
            required: true,
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'LAST-CHANGE'
            },
            type: 'attribute'
          }, {
            name: 'longname',
            attributeName: {
              localPart: 'LONG-NAME'
            },
            type: 'attribute'
          }, {
            name: 'max',
            required: true,
            typeInfo: 'Double',
            attributeName: {
              localPart: 'MAX'
            },
            type: 'attribute'
          }, {
            name: 'min',
            required: true,
            typeInfo: 'Double',
            attributeName: {
              localPart: 'MIN'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ATTRIBUTEDEFINITIONSTRING.DEFAULTVALUE',
        typeName: null,
        propertyInfos: [{
            name: 'attributevaluestring',
            required: true,
            elementName: 'ATTRIBUTE-VALUE-STRING',
            typeInfo: '.ATTRIBUTEVALUESTRING'
          }]
      }, {
        localName: 'REQIFCONTENT.SPECTYPES',
        typeName: null,
        propertyInfos: [{
            name: 'relationgrouptypeOrSPECOBJECTTYPEOrSPECRELATIONTYPE',
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [{
                elementName: 'RELATION-GROUP-TYPE',
                typeInfo: '.RELATIONGROUPTYPE'
              }, {
                elementName: 'SPEC-OBJECT-TYPE',
                typeInfo: '.SPECOBJECTTYPE'
              }, {
                elementName: 'SPEC-RELATION-TYPE',
                typeInfo: '.SPECRELATIONTYPE'
              }, {
                elementName: 'SPECIFICATION-TYPE',
                typeInfo: '.SPECIFICATIONTYPE'
              }],
            type: 'elements'
          }]
      }, {
        localName: 'SPECHIERARCHY.ALTERNATIVEID',
        typeName: null,
        propertyInfos: [{
            name: 'alternativeid',
            required: true,
            elementName: 'ALTERNATIVE-ID',
            typeInfo: '.ALTERNATIVEID'
          }]
      }],
    elementInfos: [{
        elementName: 'ATTRIBUTE-DEFINITION-BOOLEAN-REF',
        typeInfo: 'IDREF',
        scope: '.SPECHIERARCHY.EDITABLEATTS'
      }, {
        elementName: 'ATTRIBUTE-DEFINITION-INTEGER-REF',
        typeInfo: 'IDREF',
        scope: '.SPECHIERARCHY.EDITABLEATTS'
      }, {
        elementName: 'ATTRIBUTE-DEFINITION-STRING-REF',
        typeInfo: 'IDREF',
        scope: '.SPECHIERARCHY.EDITABLEATTS'
      }, {
        elementName: 'ATTRIBUTE-DEFINITION-DATE-REF',
        typeInfo: 'IDREF',
        scope: '.SPECHIERARCHY.EDITABLEATTS'
      }, {
        elementName: 'ENUM-VALUE-REF',
        typeInfo: 'IDREF',
        scope: '.ATTRIBUTEVALUEENUMERATION.VALUES'
      }, {
        elementName: 'ATTRIBUTE-DEFINITION-ENUMERATION-REF',
        typeInfo: 'IDREF',
        scope: '.SPECHIERARCHY.EDITABLEATTS'
      }, {
        elementName: 'ATTRIBUTE-DEFINITION-XHTML-REF',
        typeInfo: 'IDREF',
        scope: '.SPECHIERARCHY.EDITABLEATTS'
      }, {
        elementName: 'ATTRIBUTE-DEFINITION-REAL-REF',
        typeInfo: 'IDREF',
        scope: '.SPECHIERARCHY.EDITABLEATTS'
      }, {
        elementName: 'SPEC-RELATION-REF',
        typeInfo: 'IDREF',
        scope: '.RELATIONGROUP.SPECRELATIONS'
      }, {
        elementName: 'REQ-IF',
        typeInfo: '.REQIF'
      }]
  };
  return {
    ReqIF_20110401: ReqIF_20110401
  };
};
if (typeof define === 'function' && define.amd) {
  define([], ReqIF_20110401_Module_Factory);
}
else {
  var ReqIF_20110401_Module = ReqIF_20110401_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.ReqIF_20110401 = ReqIF_20110401_Module.ReqIF_20110401;
  }
  else {
    var ReqIF_20110401 = ReqIF_20110401_Module.ReqIF_20110401;
  }
}