var ShipOrder_Module_Factory = function () {
  var ShipOrder = {
    name: 'ShipOrder',
    typeInfos: [{
        localName: 'Shiporder',
        typeName: null,
        propertyInfos: [{
            name: 'orderperson',
            elementName: {
              localPart: 'orderperson'
            }
          }, {
            name: 'shipto',
            elementName: {
              localPart: 'shipto'
            },
            typeInfo: '.Shiporder.Shipto'
          }, {
            name: 'item',
            collection: true,
            elementName: {
              localPart: 'item'
            },
            typeInfo: '.Shiporder.Item'
          }, {
            name: 'orderid',
            attributeName: {
              localPart: 'orderid'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Shiporder.Item',
        typeName: null,
        propertyInfos: [{
            name: 'title',
            elementName: {
              localPart: 'title'
            }
          }, {
            name: 'note',
            elementName: {
              localPart: 'note'
            }
          }, {
            name: 'quantity',
            elementName: {
              localPart: 'quantity'
            },
            typeInfo: 'Integer'
          }, {
            name: 'price',
            elementName: {
              localPart: 'price'
            },
            typeInfo: 'Decimal'
          }]
      }, {
        localName: 'Shiporder.Shipto',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'name'
            }
          }, {
            name: 'address',
            elementName: {
              localPart: 'address'
            }
          }, {
            name: 'city',
            elementName: {
              localPart: 'city'
            }
          }, {
            name: 'country',
            elementName: {
              localPart: 'country'
            }
          }]
      }],
    elementInfos: [{
        elementName: {
          localPart: 'shiporder'
        },
        typeInfo: '.Shiporder'
      }]
  };
  return {
    ShipOrder: ShipOrder
  };
};
if (typeof define === 'function' && define.amd) {
  define([], ShipOrder_Module_Factory);
}
else {
  var ShipOrder_Module = ShipOrder_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.ShipOrder = ShipOrder_Module.ShipOrder;
  }
  else {
    var ShipOrder = ShipOrder_Module.ShipOrder;
  }
}