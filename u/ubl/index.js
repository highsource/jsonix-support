var Jsonix = require('jsonix').Jsonix;

var mappings = [
	require('./mappings/UBL_XAdESv132').UBL_XAdESv132,
	require('./mappings/UBL_XAdESv141').UBL_XAdESv141,
	require('./mappings/UBL_DS').UBL_DS,
	require('./mappings/UBL_CAC').UBL_CAC,
	require('./mappings/UBL_CBC').UBL_CBC,
	require('./mappings/UBL_CEC').UBL_CEC,
	require('./mappings/UBL_CSC').UBL_CSC,
	require('./mappings/UBL_SAC').UBL_SAC,
	require('./mappings/UBL_SBC').UBL_SBC,
	require('./mappings/UBL_UDT').UBL_UDT,
	require('./mappings/CCTS_CCT').CCTS_CCT,
	require('./mappings/UBL_Invoice').UBL_Invoice
];

var context = new Jsonix.Context(mappings);
