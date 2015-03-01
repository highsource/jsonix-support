var Jsonix = require('jsonix').Jsonix;
var XLink_1_0 = require('w3c-schemas').XLink_1_0;
var XSD_1_0 = require('w3c-schemas').XSD_1_0;
var OWS_1_1_0 = require('ogc-schemas').OWS_1_1_0;
var Filter_2_0 = require('ogc-schemas').Filter_2_0;
var WFS_2_0 = require('ogc-schemas').WFS_2_0;
var GML_3_2_1 = require('ogc-schemas').GML_3_2_1;


var mappings = [XLink_1_0, XSD_1_0, OWS_1_1_0, Filter_2_0, GML_3_2_1, WFS_2_0];

var cntx = new Jsonix.Context(mappings);

var getTargetNamespace = function(schema) {
	return schema.targetNamespace || "";
};

var getTargetNamespacePrefix = function(schema) {
	var tns = getTargetNamespace(schema);
	for (var xmlnsPrefix in schema.otherAttributes)
	{
		if (schema.otherAttributes.hasOwnProperty(xmlnsPrefix) && schema.otherAttributes[xmlnsPrefix] === tns)
		{
			if (xmlnsPrefix.substring(0, 6) === 'xmlns:')
			{
				return xmlnsPrefix.substring(6);
			}
		}
	}
	return undefined;
};

var getFeatureTypeElement = function(schema, featureTypeName)
{
	var tnsPrefix = getTargetNamespacePrefix(schema);
	var topLevelElements = schema.element || [];
	for (var index = 0; index < topLevelElements.length; index++)
	{
		var topLevelElement = topLevelElements[index];
		var topLevelElementName = tnsPrefix + ":" + topLevelElement.name;
		if (topLevelElementName === featureTypeName)
		{
			return topLevelElement;
		}
	}
	return undefined;
};

var getFeatureTypeTypeName = function(schema, featureTypeName)
{
	return getFeatureTypeElement(schema, featureTypeName).type;
};

var getFeatureTypeType = function(schema, featureTypeName)
{
	var featureTypeTypeName = getFeatureTypeTypeName(schema, featureTypeName);

	var topLevelComplexTypes = schema.complexType || [];

	for (var index = 0; index < topLevelComplexTypes.length; index++)
	{
		var topLevelComplexType = topLevelComplexTypes[index];
		if (topLevelComplexType.name === featureTypeTypeName.localPart)
		{
			return topLevelComplexType;
		}
	}
	return undefined;
}

var createMapping = function(schema, featureTypeName)
{
	var mapping = {};
	var tns = getTargetNamespace(schema);
	var tnsPrefix = getTargetNamespacePrefix(schema);
	var mappingName = tnsPrefix.toUpperCase();

	mapping.n = mappingName;
	mapping.dens = tns;

	var ti = createTypeInfo(schema, featureTypeName);

	mapping.tis = [ ti ];

	var ei = createElementInfo(schema, featureTypeName);

	mapping.eis = [ ei ];

	return mapping;
};

var createElementInfo = function(schema, featureTypeName)
{
	var featureTypeElement = getFeatureTypeElement(schema, featureTypeName);

	var elementInfo = {
		en : featureTypeElement.name,
		ti : '.' + featureTypeElement.type.localPart
	};

	return elementInfo;
};

var createTypeInfo = function(schema, featureTypeName)
{
	var featureTypeType = getFeatureTypeType(schema, featureTypeName);

	var baseTypeName = featureTypeType.complexContent.extension.base;
	var baseTypeInfo = cntx.getTypeInfoByTypeNameKey(baseTypeName.key);	

	console.log(baseTypeInfo.name);

	var ps = createPropertyInfos(schema, featureTypeName);

	var classInfo = {
		ln : featureTypeType.name,
		ps : ps,
		bti : baseTypeInfo.name
	};

	return classInfo;
};

var createPropertyInfos = function(schema, featureTypeName)
{
	var featureTypeType = getFeatureTypeType(schema, featureTypeName);

	var localElements = featureTypeType.complexContent.extension.sequence.element;

	var ps = [];

	for (var index = 0; index < localElements.length; index++)
	{
		var localElement = localElements[index];
		ps.push(createPropertyInfo(schema, featureTypeName, localElement));
	}
	return ps;
};

var createPropertyInfo = function(schema, featureTypeName, localElement)
{
	var type = localElement.type;
	var typeInfo = cntx.getTypeInfoByTypeNameKey(type.key);
	var p = {
		n : localElement.name,
		ti : typeInfo.name
	};
	return p;
};

module.exports = {
	"Context" : function(test) {
		var context = new Jsonix.Context(mappings);
		test.done();
        },
	"Dynamic" : function(test) {
		var context = new Jsonix.Context(mappings, {
			namespacePrefixes : {
				"http://www.w3.org/2001/XMLSchema" : "xsd"
			},
			mappingStyle : "simplified"
		});

		var featureTypeName = 'topp:tasmania_state_boundaries';
		var unmarshaller = context.createUnmarshaller();
		unmarshaller.unmarshalURL("http://demo.opengeo.org/geoserver/wfs?service=WFS&request=DescribeFeatureType&version=2.0&typename=" + featureTypeName, function (result) {
			var schema = result['xsd:schema'];
			var mapping = createMapping(schema, featureTypeName);
			console.log(JSON.stringify(mapping, null, 2));

			var dynamicContext = new Jsonix.Context([XLink_1_0, OWS_1_1_0, Filter_2_0, GML_3_2_1, WFS_2_0, mapping], {
				namespacePrefixes : { },
				mappingStyle : "simplified"
			});

			var dynamicUnmarshaller = dynamicContext.createUnmarshaller();

			dynamicUnmarshaller.unmarshalURL("http://demo.opengeo.org/geoserver/wfs?service=WFS&request=GetFeature&version=2.0&typename=topp:tasmania_state_boundaries&maxfeatures=5", function(featureCollection) {
				console.log(featureCollection);
				console.log(JSON.stringify(featureCollection, null, 2));
				test.equal("tasmania_state_boundaries.1", featureCollection['wfs:FeatureCollection'].member[0].content[0]["topp:tasmania_state_boundaries"].id);
				test.equal("Tasmania", featureCollection['wfs:FeatureCollection'].member[0].content[0]["topp:tasmania_state_boundaries"].STATE);
				test.equal("Australia", featureCollection['wfs:FeatureCollection'].member[0].content[0]["topp:tasmania_state_boundaries"].COUNTRY);
				test.equal("Australia Dollar", featureCollection['wfs:FeatureCollection'].member[0].content[0]["topp:tasmania_state_boundaries"].CURR_TYPE);
				test.equal("AUD", featureCollection['wfs:FeatureCollection'].member[0].content[0]["topp:tasmania_state_boundaries"].CURR_CODE);
				test.done();
			});

		});
	}
};