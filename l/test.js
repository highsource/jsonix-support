var Jsonix = require('jsonix').Jsonix;
var ietf_params_xml_ns_lost1 = require('./mapping/ietf_params_xml_ns_lost1');
var net_opengis_gml = require('./mapping/net_opengis_gml');

var findServiceXml = "<?xml version='1.0' encoding='UTF-8'?><findService xmlns='urn:ietf:params:xml:ns:lost1' xmlns:p2='http://www.opengis.net/gml' serviceBoundary='value' recursive='true'><location id='6020688f1ce1896d' profile='geodetic-2d'><p2:Point id='point1' srsName='urn:ogc:def:crs:EPSG::4326'><p2:pos>37.775 -122.422</p2:pos></p2:Point></location><service>urn:service:sos.police</service></findService>";
var context = new Jsonix.Context([ietf_params_xml_ns_lost1.ietf_params_xml_ns_lost1, net_opengis_gml.net_opengis_gml]);
var unmarshaller = context.createUnmarshaller();
var data = unmarshaller.unmarshalString(findServiceXml);

console.log(JSON.stringify(data));