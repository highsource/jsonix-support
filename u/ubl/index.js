var Jsonix = require('jsonix').Jsonix;
var Invoice = require('./generated-sources/jsonix/Invoice').Invoice;

new Jsonix.Context([Invoice]);
