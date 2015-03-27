process.on('uncaughtException', function(err) {
  console.error(err.stack);
});
module.exports = 
{
	"ris-bka": require('./ris-bka')
};
