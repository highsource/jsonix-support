var PO2_Module_Factory = function () {
  var PO2 = {
    name: 'PO2',
    defaultElementNamespaceURI: 'http:\/\/www.xbrl.org\/uk\/fr\/gaap\/pt\/2004-12-01',
    typeInfos: [{
        localName: 'EntityCurrentLegalName',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'AccountsAreInAccordanceWithSpecialProvisionsCompaniesActRelatingToSmallCompanies',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Boolean',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SecuredDebts',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TangibleFixedAssetsDepreciationChargeForPeriod',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'OtherAggregateReserves',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TotalFixedAssetsCostOrValuation',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TotalFixedAssetsDepreciation',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DetailsOrdinarySharesAllotted',
        typeName: null,
        propertyInfos: [{
            name: 'typeOrdinaryShare',
            required: true,
            elementName: 'TypeOrdinaryShare',
            typeInfo: '.TypeOrdinaryShare'
          }, {
            name: 'parValueOrdinaryShare',
            required: true,
            elementName: 'ParValueOrdinaryShare',
            typeInfo: '.ParValueOrdinaryShare'
          }, {
            name: 'valueOrdinarySharesAllotted',
            required: true,
            collection: true,
            elementName: 'ValueOrdinarySharesAllotted',
            typeInfo: '.ValueOrdinarySharesAllotted'
          }, {
            name: 'numberOrdinarySharesAllotted',
            required: true,
            elementName: 'NumberOrdinarySharesAllotted',
            typeInfo: '.NumberOrdinarySharesAllotted'
          }]
      }, {
        localName: 'CompaniesHouseRegisteredNumber',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Context',
        typeName: null,
        propertyInfos: [{
            name: 'entity',
            required: true,
            elementName: {
              localPart: 'entity',
              namespaceURI: 'http:\/\/www.xbrl.org\/2003\/instance'
            },
            typeInfo: '.Entity'
          }, {
            name: 'period',
            required: true,
            elementName: {
              localPart: 'period',
              namespaceURI: 'http:\/\/www.xbrl.org\/2003\/instance'
            },
            typeInfo: '.Period'
          }, {
            name: 'id',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'InvestmentsFixedAssetsFreeTextNote',
        typeName: null,
        propertyInfos: [{
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ContentAccountingPolicy',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Period',
        typeName: null,
        propertyInfos: [{
            name: 'instant',
            required: true,
            elementName: {
              localPart: 'instant',
              namespaceURI: 'http:\/\/www.xbrl.org\/2003\/instance'
            },
            typeInfo: 'Date'
          }, {
            name: 'startDate',
            required: true,
            elementName: {
              localPart: 'startDate',
              namespaceURI: 'http:\/\/www.xbrl.org\/2003\/instance'
            },
            typeInfo: 'Date'
          }, {
            name: 'endDate',
            required: true,
            elementName: {
              localPart: 'endDate',
              namespaceURI: 'http:\/\/www.xbrl.org\/2003\/instance'
            },
            typeInfo: 'Date'
          }]
      }, {
        localName: 'ShareCapitalFreeTextNote',
        typeName: null,
        propertyInfos: [{
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TotalFixedAssetsDepreciationChargeInPeriod',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'NetCurrentAssetsLiabilities',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ValueOrdinarySharesAuthorised',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ValueOrdinarySharesAllotted',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'StocksInventory',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TypeDepreciation',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CreditorsDueAfterOneYearTotalNoncurrentLiabilities',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CreditorsDueAfterOneYearFreeTextNote',
        typeName: null,
        propertyInfos: [{
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ShareholderFunds',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TotalAssetsLessCurrentLiabilities',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DirectorsAcknowledgeTheirResponsibilitiesUnderCompaniesAct',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Boolean',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'AccountingPolicy',
        typeName: null,
        propertyInfos: [{
            name: 'titleAccountingPolicy',
            required: true,
            elementName: {
              localPart: 'TitleAccountingPolicy',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.TitleAccountingPolicy'
          }, {
            name: 'contentAccountingPolicy',
            required: true,
            elementName: {
              localPart: 'ContentAccountingPolicy',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.ContentAccountingPolicy'
          }]
      }, {
        localName: 'RateDepreciation',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Decimal',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TotalFixedAssetsAdditions',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'IntangibleAssetsFreeTextNote',
        typeName: null,
        propertyInfos: [{
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TangibleFixedAssets',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BalanceSheetDate',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Date',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CompanyNotDormant',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Boolean',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CompaniesHouseDocumentAuthentication',
        typeName: null,
        propertyInfos: [{
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ProvisionsForLiabilitiesCharges',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CreditorsDueWithinOneYearTotalCurrentLiabilities',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'NumberOrdinarySharesAuthorised',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Double',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ForeignExchangeRate',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DateApproval',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Date',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TangibleFixedAssetsAdditions',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Unit',
        typeName: null,
        propertyInfos: [{
            name: 'measure',
            required: true,
            elementName: {
              localPart: 'measure',
              namespaceURI: 'http:\/\/www.xbrl.org\/2003\/instance'
            },
            typeInfo: 'NMToken'
          }, {
            name: 'id',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Entity',
        typeName: null,
        propertyInfos: [{
            name: 'identifier',
            required: true,
            elementName: {
              localPart: 'identifier',
              namespaceURI: 'http:\/\/www.xbrl.org\/2003\/instance'
            },
            typeInfo: '.Identifier'
          }]
      }, {
        localName: 'TangibleFixedAssetsDepreciation',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TangibleAssetsFreeTextNote',
        typeName: null,
        propertyInfos: [{
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Debtors',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TangibleFixedAssetsCostOrValuation',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CashBankInHand',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TitleAccountingPolicy',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CompanyIdentifyingNumbers',
        typeName: null,
        propertyInfos: [{
            name: 'companiesHouseRegisteredNumber',
            required: true,
            elementName: {
              localPart: 'CompaniesHouseRegisteredNumber',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.CompaniesHouseRegisteredNumber'
          }]
      }, {
        localName: 'Identifier',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            type: 'value'
          }, {
            name: 'scheme',
            required: true,
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'scheme'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'StatementDatesPeriodsCovered',
        typeName: null,
        propertyInfos: [{
            name: 'balanceSheetDate',
            required: true,
            elementName: {
              localPart: 'BalanceSheetDate',
              namespaceURI: 'http:\/\/www.xbrl.org\/uk\/fr\/gcd\/2004-12-01'
            },
            typeInfo: '.BalanceSheetDate'
          }]
      }, {
        localName: 'SchemaRef',
        typeName: null,
        propertyInfos: [{
            name: 'arcrole',
            required: true,
            attributeName: {
              localPart: 'arcrole',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }, {
            name: 'href',
            required: true,
            attributeName: {
              localPart: 'href',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }, {
            name: 'type',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'type',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalledUpShareCapital',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'EntityNames',
        typeName: null,
        propertyInfos: [{
            name: 'entityCurrentLegalName',
            required: true,
            elementName: {
              localPart: 'EntityCurrentLegalName',
              namespaceURI: 'http:\/\/www.xbrl.org\/uk\/fr\/gcd\/2004-12-01'
            },
            typeInfo: '.EntityCurrentLegalName'
          }]
      }, {
        localName: 'Xbrl',
        typeName: null,
        propertyInfos: [{
            name: 'schemaRef',
            required: true,
            elementName: {
              localPart: 'schemaRef',
              namespaceURI: 'http:\/\/www.xbrl.org\/2003\/linkbase'
            },
            typeInfo: '.SchemaRef'
          }, {
            name: 'companyNotDormant',
            required: true,
            elementName: {
              localPart: 'CompanyNotDormant',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.CompanyNotDormant'
          }, {
            name: 'entityNames',
            required: true,
            elementName: {
              localPart: 'EntityNames',
              namespaceURI: 'http:\/\/www.xbrl.org\/uk\/fr\/gcd\/2004-12-01'
            },
            typeInfo: '.EntityNames'
          }, {
            name: 'companyIdentifyingNumbers',
            required: true,
            elementName: {
              localPart: 'CompanyIdentifyingNumbers',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.CompanyIdentifyingNumbers'
          }, {
            name: 'statementDatesPeriodsCovered',
            required: true,
            elementName: {
              localPart: 'StatementDatesPeriodsCovered',
              namespaceURI: 'http:\/\/www.xbrl.org\/uk\/fr\/gcd\/2004-12-01'
            },
            typeInfo: '.StatementDatesPeriodsCovered'
          }, {
            name: 'profitLossAccountReserve',
            required: true,
            collection: true,
            elementName: 'ProfitLossAccountReserve',
            typeInfo: '.ProfitLossAccountReserve'
          }, {
            name: 'shareholderFunds',
            required: true,
            collection: true,
            elementName: 'ShareholderFunds',
            typeInfo: '.ShareholderFunds'
          }, {
            name: 'calledUpShareCapital',
            required: true,
            collection: true,
            elementName: 'CalledUpShareCapital',
            typeInfo: '.CalledUpShareCapital'
          }, {
            name: 'otherAggregateReserves',
            required: true,
            collection: true,
            elementName: 'OtherAggregateReserves',
            typeInfo: '.OtherAggregateReserves'
          }, {
            name: 'netAssetsLiabilitiesIncludingPensionAssetLiability',
            required: true,
            collection: true,
            elementName: 'NetAssetsLiabilitiesIncludingPensionAssetLiability',
            typeInfo: '.NetAssetsLiabilitiesIncludingPensionAssetLiability'
          }, {
            name: 'provisionsForLiabilitiesCharges',
            required: true,
            collection: true,
            elementName: 'ProvisionsForLiabilitiesCharges',
            typeInfo: '.ProvisionsForLiabilitiesCharges'
          }, {
            name: 'creditorsDueAfterOneYearTotalNoncurrentLiabilities',
            required: true,
            collection: true,
            elementName: 'CreditorsDueAfterOneYearTotalNoncurrentLiabilities',
            typeInfo: '.CreditorsDueAfterOneYearTotalNoncurrentLiabilities'
          }, {
            name: 'totalAssetsLessCurrentLiabilities',
            required: true,
            collection: true,
            elementName: 'TotalAssetsLessCurrentLiabilities',
            typeInfo: '.TotalAssetsLessCurrentLiabilities'
          }, {
            name: 'netCurrentAssetsLiabilities',
            required: true,
            collection: true,
            elementName: 'NetCurrentAssetsLiabilities',
            typeInfo: '.NetCurrentAssetsLiabilities'
          }, {
            name: 'creditorsDueWithinOneYearTotalCurrentLiabilities',
            required: true,
            collection: true,
            elementName: 'CreditorsDueWithinOneYearTotalCurrentLiabilities',
            typeInfo: '.CreditorsDueWithinOneYearTotalCurrentLiabilities'
          }, {
            name: 'currentAssets',
            required: true,
            collection: true,
            elementName: 'CurrentAssets',
            typeInfo: '.CurrentAssets'
          }, {
            name: 'debtors',
            required: true,
            collection: true,
            elementName: 'Debtors',
            typeInfo: '.Debtors'
          }, {
            name: 'stocksInventory',
            required: true,
            collection: true,
            elementName: 'StocksInventory',
            typeInfo: '.StocksInventory'
          }, {
            name: 'cashBankInHand',
            required: true,
            collection: true,
            elementName: 'CashBankInHand',
            typeInfo: '.CashBankInHand'
          }, {
            name: 'fixedAssets',
            required: true,
            collection: true,
            elementName: 'FixedAssets',
            typeInfo: '.FixedAssets'
          }, {
            name: 'tangibleFixedAssets',
            required: true,
            collection: true,
            elementName: 'TangibleFixedAssets',
            typeInfo: '.TangibleFixedAssets'
          }, {
            name: 'accountingPolicy',
            required: true,
            collection: true,
            elementName: {
              localPart: 'AccountingPolicy',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.AccountingPolicy'
          }, {
            name: 'depreciationRate',
            required: true,
            collection: true,
            elementName: {
              localPart: 'DepreciationRate',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.DepreciationRate'
          }, {
            name: 'foreignExchangeRate',
            required: true,
            elementName: {
              localPart: 'ForeignExchangeRate',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.ForeignExchangeRate'
          }, {
            name: 'intangibleAssetsFreeTextNote',
            required: true,
            elementName: {
              localPart: 'IntangibleAssetsFreeTextNote',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.IntangibleAssetsFreeTextNote'
          }, {
            name: 'tangibleFixedAssetsCostOrValuation',
            required: true,
            collection: true,
            elementName: 'TangibleFixedAssetsCostOrValuation',
            typeInfo: '.TangibleFixedAssetsCostOrValuation'
          }, {
            name: 'tangibleFixedAssetsAdditions',
            required: true,
            elementName: 'TangibleFixedAssetsAdditions',
            typeInfo: '.TangibleFixedAssetsAdditions'
          }, {
            name: 'tangibleFixedAssetsDepreciation',
            required: true,
            collection: true,
            elementName: 'TangibleFixedAssetsDepreciation',
            typeInfo: '.TangibleFixedAssetsDepreciation'
          }, {
            name: 'tangibleFixedAssetsDepreciationChargeForPeriod',
            required: true,
            elementName: 'TangibleFixedAssetsDepreciationChargeForPeriod',
            typeInfo: '.TangibleFixedAssetsDepreciationChargeForPeriod'
          }, {
            name: 'tangibleAssetsFreeTextNote',
            required: true,
            elementName: {
              localPart: 'TangibleAssetsFreeTextNote',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.TangibleAssetsFreeTextNote'
          }, {
            name: 'investmentsFixedAssetsFreeTextNote',
            required: true,
            elementName: {
              localPart: 'InvestmentsFixedAssetsFreeTextNote',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.InvestmentsFixedAssetsFreeTextNote'
          }, {
            name: 'totalFixedAssetsCostOrValuation',
            required: true,
            collection: true,
            elementName: {
              localPart: 'TotalFixedAssetsCostOrValuation',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.TotalFixedAssetsCostOrValuation'
          }, {
            name: 'totalFixedAssetsAdditions',
            required: true,
            elementName: {
              localPart: 'TotalFixedAssetsAdditions',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.TotalFixedAssetsAdditions'
          }, {
            name: 'totalFixedAssetsDepreciation',
            required: true,
            collection: true,
            elementName: {
              localPart: 'TotalFixedAssetsDepreciation',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.TotalFixedAssetsDepreciation'
          }, {
            name: 'totalFixedAssetsDepreciationChargeInPeriod',
            required: true,
            elementName: {
              localPart: 'TotalFixedAssetsDepreciationChargeInPeriod',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.TotalFixedAssetsDepreciationChargeInPeriod'
          }, {
            name: 'totalFixedAssetsFreeTextNote',
            required: true,
            elementName: {
              localPart: 'TotalFixedAssetsFreeTextNote',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.TotalFixedAssetsFreeTextNote'
          }, {
            name: 'securedDebts',
            required: true,
            collection: true,
            elementName: {
              localPart: 'SecuredDebts',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.SecuredDebts'
          }, {
            name: 'creditorsDueAfterOneYearFreeTextNote',
            required: true,
            elementName: {
              localPart: 'CreditorsDueAfterOneYearFreeTextNote',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.CreditorsDueAfterOneYearFreeTextNote'
          }, {
            name: 'equityAuthorisedDetails',
            required: true,
            collection: true,
            elementName: 'EquityAuthorisedDetails',
            typeInfo: '.EquityAuthorisedDetails'
          }, {
            name: 'detailsOrdinarySharesAllotted',
            required: true,
            collection: true,
            elementName: 'DetailsOrdinarySharesAllotted',
            typeInfo: '.DetailsOrdinarySharesAllotted'
          }, {
            name: 'shareCapitalFreeTextNote',
            required: true,
            elementName: {
              localPart: 'ShareCapitalFreeTextNote',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.ShareCapitalFreeTextNote'
          }, {
            name: 'dateApproval',
            required: true,
            elementName: 'DateApproval',
            typeInfo: '.DateApproval'
          }, {
            name: 'approvalDetails',
            required: true,
            elementName: 'ApprovalDetails',
            typeInfo: '.ApprovalDetails'
          }, {
            name: 'companyEntitledToExemptionUnderSection477CompaniesAct2006',
            required: true,
            elementName: {
              localPart: 'CompanyEntitledToExemptionUnderSection477CompaniesAct2006',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.CompanyEntitledToExemptionUnderSection477CompaniesAct2006'
          }, {
            name: 'membersHaveNotRequiredCompanyToObtainAnAudit',
            required: true,
            elementName: {
              localPart: 'MembersHaveNotRequiredCompanyToObtainAnAudit',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.MembersHaveNotRequiredCompanyToObtainAnAudit'
          }, {
            name: 'directorsAcknowledgeTheirResponsibilitiesUnderCompaniesAct',
            required: true,
            elementName: {
              localPart: 'DirectorsAcknowledgeTheirResponsibilitiesUnderCompaniesAct',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.DirectorsAcknowledgeTheirResponsibilitiesUnderCompaniesAct'
          }, {
            name: 'accountsAreInAccordanceWithSpecialProvisionsCompaniesActRelatingToSmallCompanies',
            required: true,
            elementName: {
              localPart: 'AccountsAreInAccordanceWithSpecialProvisionsCompaniesActRelatingToSmallCompanies',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.AccountsAreInAccordanceWithSpecialProvisionsCompaniesActRelatingToSmallCompanies'
          }, {
            name: 'unit',
            required: true,
            collection: true,
            elementName: {
              localPart: 'unit',
              namespaceURI: 'http:\/\/www.xbrl.org\/2003\/instance'
            },
            typeInfo: '.Unit'
          }, {
            name: 'context',
            required: true,
            collection: true,
            elementName: {
              localPart: 'context',
              namespaceURI: 'http:\/\/www.xbrl.org\/2003\/instance'
            },
            typeInfo: '.Context'
          }, {
            name: 'companiesHouseDocumentAuthentication',
            required: true,
            elementName: {
              localPart: 'CompaniesHouseDocumentAuthentication',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.CompaniesHouseDocumentAuthentication'
          }, {
            name: 'dateAccountsReceived',
            required: true,
            elementName: {
              localPart: 'DateAccountsReceived',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.DateAccountsReceived'
          }]
      }, {
        localName: 'ApprovalDetails',
        typeName: null,
        propertyInfos: [{
            name: 'nameApprovingDirector',
            required: true,
            elementName: 'NameApprovingDirector',
            typeInfo: '.NameApprovingDirector'
          }]
      }, {
        localName: 'CompanyEntitledToExemptionUnderSection477CompaniesAct2006',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Boolean',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ParValueOrdinaryShare',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Double',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CategoryItem',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'NetAssetsLiabilitiesIncludingPensionAssetLiability',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CurrentAssets',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'FixedAssets',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'NumberOrdinarySharesAllotted',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Double',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ProfitLossAccountReserve',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }, {
            name: 'precision',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'precision'
            },
            type: 'attribute'
          }, {
            name: 'unitRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'unitRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TypeOrdinaryShare',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'NameApprovingDirector',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MembersHaveNotRequiredCompanyToObtainAnAudit',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Boolean',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'EquityAuthorisedDetails',
        typeName: null,
        propertyInfos: [{
            name: 'typeOrdinaryShare',
            required: true,
            elementName: 'TypeOrdinaryShare',
            typeInfo: '.TypeOrdinaryShare'
          }, {
            name: 'numberOrdinarySharesAuthorised',
            required: true,
            elementName: 'NumberOrdinarySharesAuthorised',
            typeInfo: '.NumberOrdinarySharesAuthorised'
          }, {
            name: 'parValueOrdinaryShare',
            required: true,
            elementName: 'ParValueOrdinaryShare',
            typeInfo: '.ParValueOrdinaryShare'
          }, {
            name: 'valueOrdinarySharesAuthorised',
            required: true,
            collection: true,
            elementName: 'ValueOrdinarySharesAuthorised',
            typeInfo: '.ValueOrdinarySharesAuthorised'
          }]
      }, {
        localName: 'DateAccountsReceived',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Date',
            type: 'value'
          }, {
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TotalFixedAssetsFreeTextNote',
        typeName: null,
        propertyInfos: [{
            name: 'contextRef',
            required: true,
            typeInfo: 'NCName',
            attributeName: {
              localPart: 'contextRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DepreciationRate',
        typeName: null,
        propertyInfos: [{
            name: 'categoryItem',
            required: true,
            elementName: {
              localPart: 'CategoryItem',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.CategoryItem'
          }, {
            name: 'typeDepreciation',
            required: true,
            elementName: {
              localPart: 'TypeDepreciation',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.TypeDepreciation'
          }, {
            name: 'rateDepreciation',
            required: true,
            elementName: {
              localPart: 'RateDepreciation',
              namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
            },
            typeInfo: '.RateDepreciation'
          }]
      }],
    elementInfos: [{
        typeInfo: '.ContentAccountingPolicy',
        elementName: {
          localPart: 'ContentAccountingPolicy',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }, {
        typeInfo: '.StatementDatesPeriodsCovered',
        elementName: {
          localPart: 'StatementDatesPeriodsCovered',
          namespaceURI: 'http:\/\/www.xbrl.org\/uk\/fr\/gcd\/2004-12-01'
        }
      }, {
        typeInfo: 'NMToken',
        elementName: {
          localPart: 'measure',
          namespaceURI: 'http:\/\/www.xbrl.org\/2003\/instance'
        }
      }, {
        typeInfo: '.SchemaRef',
        elementName: {
          localPart: 'schemaRef',
          namespaceURI: 'http:\/\/www.xbrl.org\/2003\/linkbase'
        }
      }, {
        typeInfo: '.TotalAssetsLessCurrentLiabilities',
        elementName: 'TotalAssetsLessCurrentLiabilities'
      }, {
        typeInfo: '.TypeOrdinaryShare',
        elementName: 'TypeOrdinaryShare'
      }, {
        typeInfo: '.NetAssetsLiabilitiesIncludingPensionAssetLiability',
        elementName: 'NetAssetsLiabilitiesIncludingPensionAssetLiability'
      }, {
        typeInfo: '.NetCurrentAssetsLiabilities',
        elementName: 'NetCurrentAssetsLiabilities'
      }, {
        typeInfo: '.CategoryItem',
        elementName: {
          localPart: 'CategoryItem',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }, {
        typeInfo: '.TangibleFixedAssetsCostOrValuation',
        elementName: 'TangibleFixedAssetsCostOrValuation'
      }, {
        typeInfo: '.ForeignExchangeRate',
        elementName: {
          localPart: 'ForeignExchangeRate',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }, {
        typeInfo: '.ValueOrdinarySharesAllotted',
        elementName: 'ValueOrdinarySharesAllotted'
      }, {
        typeInfo: '.TangibleAssetsFreeTextNote',
        elementName: {
          localPart: 'TangibleAssetsFreeTextNote',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }, {
        typeInfo: '.ParValueOrdinaryShare',
        elementName: 'ParValueOrdinaryShare'
      }, {
        typeInfo: '.TotalFixedAssetsDepreciationChargeInPeriod',
        elementName: {
          localPart: 'TotalFixedAssetsDepreciationChargeInPeriod',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }, {
        typeInfo: '.TangibleFixedAssetsDepreciationChargeForPeriod',
        elementName: 'TangibleFixedAssetsDepreciationChargeForPeriod'
      }, {
        typeInfo: '.EntityNames',
        elementName: {
          localPart: 'EntityNames',
          namespaceURI: 'http:\/\/www.xbrl.org\/uk\/fr\/gcd\/2004-12-01'
        }
      }, {
        typeInfo: '.EquityAuthorisedDetails',
        elementName: 'EquityAuthorisedDetails'
      }, {
        typeInfo: '.CompanyIdentifyingNumbers',
        elementName: {
          localPart: 'CompanyIdentifyingNumbers',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }, {
        typeInfo: '.Entity',
        elementName: {
          localPart: 'entity',
          namespaceURI: 'http:\/\/www.xbrl.org\/2003\/instance'
        }
      }, {
        typeInfo: '.ProvisionsForLiabilitiesCharges',
        elementName: 'ProvisionsForLiabilitiesCharges'
      }, {
        typeInfo: '.TotalFixedAssetsCostOrValuation',
        elementName: {
          localPart: 'TotalFixedAssetsCostOrValuation',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }, {
        typeInfo: 'Date',
        elementName: {
          localPart: 'endDate',
          namespaceURI: 'http:\/\/www.xbrl.org\/2003\/instance'
        }
      }, {
        typeInfo: '.NumberOrdinarySharesAuthorised',
        elementName: 'NumberOrdinarySharesAuthorised'
      }, {
        typeInfo: '.StocksInventory',
        elementName: 'StocksInventory'
      }, {
        typeInfo: '.CurrentAssets',
        elementName: 'CurrentAssets'
      }, {
        typeInfo: '.TotalFixedAssetsDepreciation',
        elementName: {
          localPart: 'TotalFixedAssetsDepreciation',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }, {
        typeInfo: '.TangibleFixedAssetsDepreciation',
        elementName: 'TangibleFixedAssetsDepreciation'
      }, {
        typeInfo: '.AccountsAreInAccordanceWithSpecialProvisionsCompaniesActRelatingToSmallCompanies',
        elementName: {
          localPart: 'AccountsAreInAccordanceWithSpecialProvisionsCompaniesActRelatingToSmallCompanies',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }, {
        typeInfo: '.Xbrl',
        elementName: {
          localPart: 'xbrl',
          namespaceURI: 'http:\/\/www.xbrl.org\/2003\/instance'
        }
      }, {
        typeInfo: '.RateDepreciation',
        elementName: {
          localPart: 'RateDepreciation',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }, {
        typeInfo: '.TypeDepreciation',
        elementName: {
          localPart: 'TypeDepreciation',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }, {
        typeInfo: '.OtherAggregateReserves',
        elementName: 'OtherAggregateReserves'
      }, {
        typeInfo: '.CompaniesHouseRegisteredNumber',
        elementName: {
          localPart: 'CompaniesHouseRegisteredNumber',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }, {
        typeInfo: '.Identifier',
        elementName: {
          localPart: 'identifier',
          namespaceURI: 'http:\/\/www.xbrl.org\/2003\/instance'
        }
      }, {
        typeInfo: '.AccountingPolicy',
        elementName: {
          localPart: 'AccountingPolicy',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }, {
        typeInfo: '.CreditorsDueAfterOneYearFreeTextNote',
        elementName: {
          localPart: 'CreditorsDueAfterOneYearFreeTextNote',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }, {
        typeInfo: 'Date',
        elementName: {
          localPart: 'startDate',
          namespaceURI: 'http:\/\/www.xbrl.org\/2003\/instance'
        }
      }, {
        typeInfo: '.Unit',
        elementName: {
          localPart: 'unit',
          namespaceURI: 'http:\/\/www.xbrl.org\/2003\/instance'
        }
      }, {
        typeInfo: '.BalanceSheetDate',
        elementName: {
          localPart: 'BalanceSheetDate',
          namespaceURI: 'http:\/\/www.xbrl.org\/uk\/fr\/gcd\/2004-12-01'
        }
      }, {
        typeInfo: '.ProfitLossAccountReserve',
        elementName: 'ProfitLossAccountReserve'
      }, {
        typeInfo: 'Date',
        elementName: {
          localPart: 'instant',
          namespaceURI: 'http:\/\/www.xbrl.org\/2003\/instance'
        }
      }, {
        typeInfo: '.DateApproval',
        elementName: 'DateApproval'
      }, {
        typeInfo: '.Period',
        elementName: {
          localPart: 'period',
          namespaceURI: 'http:\/\/www.xbrl.org\/2003\/instance'
        }
      }, {
        typeInfo: '.InvestmentsFixedAssetsFreeTextNote',
        elementName: {
          localPart: 'InvestmentsFixedAssetsFreeTextNote',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }, {
        typeInfo: '.TangibleFixedAssets',
        elementName: 'TangibleFixedAssets'
      }, {
        typeInfo: '.CashBankInHand',
        elementName: 'CashBankInHand'
      }, {
        typeInfo: '.CalledUpShareCapital',
        elementName: 'CalledUpShareCapital'
      }, {
        typeInfo: '.ApprovalDetails',
        elementName: 'ApprovalDetails'
      }, {
        typeInfo: '.TangibleFixedAssetsAdditions',
        elementName: 'TangibleFixedAssetsAdditions'
      }, {
        typeInfo: '.DetailsOrdinarySharesAllotted',
        elementName: 'DetailsOrdinarySharesAllotted'
      }, {
        typeInfo: '.FixedAssets',
        elementName: 'FixedAssets'
      }, {
        typeInfo: '.NumberOrdinarySharesAllotted',
        elementName: 'NumberOrdinarySharesAllotted'
      }, {
        typeInfo: '.TotalFixedAssetsFreeTextNote',
        elementName: {
          localPart: 'TotalFixedAssetsFreeTextNote',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }, {
        typeInfo: '.CompanyNotDormant',
        elementName: {
          localPart: 'CompanyNotDormant',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }, {
        typeInfo: '.CompaniesHouseDocumentAuthentication',
        elementName: {
          localPart: 'CompaniesHouseDocumentAuthentication',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }, {
        typeInfo: '.IntangibleAssetsFreeTextNote',
        elementName: {
          localPart: 'IntangibleAssetsFreeTextNote',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }, {
        typeInfo: '.Context',
        elementName: {
          localPart: 'context',
          namespaceURI: 'http:\/\/www.xbrl.org\/2003\/instance'
        }
      }, {
        typeInfo: '.TotalFixedAssetsAdditions',
        elementName: {
          localPart: 'TotalFixedAssetsAdditions',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }, {
        typeInfo: '.DepreciationRate',
        elementName: {
          localPart: 'DepreciationRate',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }, {
        typeInfo: '.ValueOrdinarySharesAuthorised',
        elementName: 'ValueOrdinarySharesAuthorised'
      }, {
        typeInfo: '.ShareCapitalFreeTextNote',
        elementName: {
          localPart: 'ShareCapitalFreeTextNote',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }, {
        typeInfo: '.DateAccountsReceived',
        elementName: {
          localPart: 'DateAccountsReceived',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }, {
        typeInfo: '.ShareholderFunds',
        elementName: 'ShareholderFunds'
      }, {
        typeInfo: '.CreditorsDueWithinOneYearTotalCurrentLiabilities',
        elementName: 'CreditorsDueWithinOneYearTotalCurrentLiabilities'
      }, {
        typeInfo: '.TitleAccountingPolicy',
        elementName: {
          localPart: 'TitleAccountingPolicy',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }, {
        typeInfo: '.CompanyEntitledToExemptionUnderSection477CompaniesAct2006',
        elementName: {
          localPart: 'CompanyEntitledToExemptionUnderSection477CompaniesAct2006',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }, {
        typeInfo: '.EntityCurrentLegalName',
        elementName: {
          localPart: 'EntityCurrentLegalName',
          namespaceURI: 'http:\/\/www.xbrl.org\/uk\/fr\/gcd\/2004-12-01'
        }
      }, {
        typeInfo: '.NameApprovingDirector',
        elementName: 'NameApprovingDirector'
      }, {
        typeInfo: '.MembersHaveNotRequiredCompanyToObtainAnAudit',
        elementName: {
          localPart: 'MembersHaveNotRequiredCompanyToObtainAnAudit',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }, {
        typeInfo: '.CreditorsDueAfterOneYearTotalNoncurrentLiabilities',
        elementName: 'CreditorsDueAfterOneYearTotalNoncurrentLiabilities'
      }, {
        typeInfo: '.Debtors',
        elementName: 'Debtors'
      }, {
        typeInfo: '.DirectorsAcknowledgeTheirResponsibilitiesUnderCompaniesAct',
        elementName: {
          localPart: 'DirectorsAcknowledgeTheirResponsibilitiesUnderCompaniesAct',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }, {
        typeInfo: '.SecuredDebts',
        elementName: {
          localPart: 'SecuredDebts',
          namespaceURI: 'http:\/\/www.companieshouse.gov.uk\/ef\/xbrl\/uk\/fr\/gaap\/ae\/2009-06-21'
        }
      }]
  };
  return {
    PO2: PO2
  };
};
if (typeof define === 'function' && define.amd) {
  define([], PO2_Module_Factory);
}
else {
  var PO2_Module = PO2_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.PO2 = PO2_Module.PO2;
  }
  else {
    var PO2 = PO2_Module.PO2;
  }
}