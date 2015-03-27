process.on('uncaughtException', function(err) {
  console.error(err.stack);
});
module.exports = 
{
	"OGD": require('./OGD')
};
