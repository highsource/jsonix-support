var SOAP_1_2_Module_Factory = function () {
  var SOAP_Envelope = {
    n: 'SOAP_Envelope',
    dens: 'http:\/\/www.w3.org\/2003\/05\/soap-envelope',
    tis: [{
        ln: 'Faultcode',
        tn: 'faultcode',
        ps: [{
            n: 'value',
            en: 'Value',
            ti: 'QName'
          }, {
            n: 'subcode',
            en: 'Subcode',
            ti: '.Subcode'
          }]
      }, {
        ln: 'Header',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'any',
            col: true,
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'Reasontext',
        tn: 'reasontext',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'NotUnderstoodType',
        ps: [{
            n: 'qname',
            ti: 'QName',
            an: {
              lp: 'qname'
            },
            t: 'a'
          }]
      }, {
        ln: 'UpgradeType',
        ps: [{
            n: 'supportedEnvelope',
            col: true,
            en: 'SupportedEnvelope',
            ti: '.SupportedEnvType'
          }]
      }, {
        ln: 'Subcode',
        tn: 'subcode',
        ps: [{
            n: 'value',
            en: 'Value',
            ti: 'QName'
          }, {
            n: 'subcode',
            en: 'Subcode',
            ti: '.Subcode'
          }]
      }, {
        ln: 'Detail',
        tn: 'detail',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'any',
            col: true,
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'SupportedEnvType',
        ps: [{
            n: 'qname',
            ti: 'QName',
            an: {
              lp: 'qname'
            },
            t: 'a'
          }]
      }, {
        ln: 'Faultreason',
        tn: 'faultreason',
        ps: [{
            n: 'text',
            col: true,
            en: 'Text',
            ti: '.Reasontext'
          }]
      }, {
        ln: 'Fault',
        ps: [{
            n: 'code',
            en: 'Code',
            ti: '.Faultcode'
          }, {
            n: 'reason',
            en: 'Reason',
            ti: '.Faultreason'
          }, {
            n: 'node',
            en: 'Node'
          }, {
            n: 'role',
            en: 'Role'
          }, {
            n: 'detail',
            en: 'Detail',
            ti: '.Detail'
          }]
      }, {
        ln: 'Envelope',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'header',
            en: 'Header',
            ti: '.Header'
          }, {
            n: 'body',
            en: 'Body',
            ti: '.Body'
          }]
      }, {
        ln: 'Body',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'any',
            col: true,
            mx: false,
            t: 'ae'
          }]
      }],
    eis: [{
        en: 'Envelope',
        ti: '.Envelope'
      }, {
        en: 'Body',
        ti: '.Body'
      }, {
        en: 'NotUnderstood',
        ti: '.NotUnderstoodType'
      }, {
        en: 'Header',
        ti: '.Header'
      }, {
        en: 'Upgrade',
        ti: '.UpgradeType'
      }, {
        en: 'Fault',
        ti: '.Fault'
      }]
  };
  return {
    SOAP_Envelope: SOAP_Envelope
  };
};
if (typeof define === 'function' && define.amd) {
  define([], SOAP_1_2_Module_Factory);
}
else {
  var SOAP_1_2_Module = SOAP_1_2_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.SOAP_Envelope = SOAP_1_2_Module.SOAP_Envelope;
  }
  else {
    var SOAP_Envelope = SOAP_1_2_Module.SOAP_Envelope;
  }
}