process.on('uncaughtException', function(err) {
  console.error(err.stack);
});
module.exports = 
{
	"OGD_Request": require('./OGD_Request')
};
