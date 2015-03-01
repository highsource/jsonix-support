process.on('uncaughtException', function(err) {
  console.error(err.stack);
});
module.exports = 
{
	"wfs-dynamic": require('./wfs-dynamic')
};
