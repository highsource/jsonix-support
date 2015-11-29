process.on('uncaughtException', function(err) {
  console.error(err.stack);
});
module.exports = 
{
	"Lost1-generated": require('./Lost1-generated'),
	"Lost1-ogc-schemas": require('./Lost1-ogc-schemas')
};
