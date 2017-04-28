let path = require('path');

var Jsonix = require('jsonix').Jsonix;

var MySchema = require(path.join(__dirname, 'mappings')+'/PO2.js').PO2;

var context = new Jsonix.Context([ MySchema ],{
    namespacePrefixes: {
        'http://www.xbrl.org/2003/linkbase':'link',
    	'http://www.xbrl.org/uk/fr/gcd/2004-12-01':'gc',
    	'http://www.companieshouse.gov.uk/ef/xbrl/uk/fr/gaap/ae/2009-06-21':'ae',
    	'http://www.xbrl.org/2003/instance':'xbrli',
    	'http://www.xbrl.org/uk/fr/gaap/pt/2004-12-01':'pt',
    	'http://www.w3.org/1999/xlink':'xlink'
    }
});

var unmarshaller = context.createUnmarshaller();

unmarshaller.unmarshalFile('test-file-1.xml', function(myElement) {
	console.log(JSON.stringify(myElement, null, 2));
	
});