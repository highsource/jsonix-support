process.on('uncaughtException', function(err) {
  console.error(err.stack);
});
module.exports = 
{
	"ING": require('./ING')
};
