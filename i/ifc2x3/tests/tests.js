process.on('uncaughtException', function(err) {
  console.error(err.stack);
});
module.exports = 
{
	"ifc2x3": require('./ifc2x3')
};
