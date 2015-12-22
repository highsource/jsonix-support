var Jsonix = require('jsonix').Jsonix;
var Invoice = require('./mappings/Invoice').Invoice;

new Jsonix.Context([Invoice]);
