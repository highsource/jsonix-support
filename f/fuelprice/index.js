const ws = require('ws.js');
const parser = require('xml2json');
const Jsonix = require('jsonix').Jsonix;
// const FuelStation = require('./mappings/FuelStation').FuelStation;
// const FuelPrice = require('./mappings/FuelPrice').FuelPrice;
// const schema = require('./mappings/schema').schema;
const envelope = require('./mappings/envelope').envelope;
const getFuelStationResponse = require('./mappings/getFuelStationsResponse').getFuelStationsResponse;

const CircularJSON = require('circular-json');

//Auth
const client = 'bosch';
const token = 'token';

const url = 'http://mome-test1.com:9090/marketTransparency/services/FuelDataService';
const endpoint = 'GetFuelStations';

//parameters
const stationId = 50014;
const prices = 'true';
const provider = 'mdm';

const request = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"' +
    'xmlns:v1="http://schemas.mobility-media.com/wsdl/fuelprice/v1"' +
    'xmlns:mod="http://schemas.mobility-media.com/wsdl/fuelprice/v1/model">' +
    '<soapenv:Header/>' +
    '<soapenv:Body>' +
    '<v1:AuthenticationHeader client="' + client + '">' +
    '    <v1:token>token</v1:token>' +
    '</v1:AuthenticationHeader>' +
    '<v1:' + endpoint + 'Request prices="' + prices + '" fueltype="" provider="' + provider + '">' +
    '<v1:stationid>' + stationId + '</v1:stationid>' +
    '</v1:' + endpoint + 'Request>' +
    '</soapenv:Body>' +
    '</soapenv:Envelope>';

const ctx = {
    request: request
    , url: url
    , action: "urn:" + endpoint
    , contentType: "text/xml"
};

const handlers = [new ws.Http()];

ws.send(handlers, ctx, function (ctx) {
    // console.log("response: " + ctx.response);
    const context = new Jsonix.Context([envelope, getFuelStationResponse]/*, {
     namespacePrefixes: {
     'http://schemas.xmlsoap.org/soap/envelope/': 'soap'
     }
     }*/);
    const unmarshaller = context.createUnmarshaller();

    // Unmarshal the XML file
    const unmarshalled = unmarshaller.unmarshalString(ctx.response);
    //console.log(unMarshall.value.body.any[0].childNodes[0].childNodes[0]);//FuelStation
    //console.log(unmarshalled.value.body.any[0].childNodes[0].childNodes[1].childNodes);//prices
    //console.dir(unMarshall.value, { depth: null });
    /*function (myElement) {
     console.log(myElement);
     //  var myData = myElement.value;
     });*/


    console.log(JSON.stringify(unmarshalled.value.body.any[0].value.entry[0]));
});