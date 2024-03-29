var fins = require('../lib/index');

/* Connecting to remote FINS client on port 9600 with default timeout value. */
var client = fins.FinsClient(9600,'192.168.1.100');

/* Setting up our error listener */
client.on('error',function(error) {
  console.log("Error: ", error);
});

/*
 Setting up the response listener
 Showing properties of a response
*/

client.on('reply',function(msg) {
	console.log(msg);
  console.log("Reply from: ", msg.remotehost);
    console.log("Replying to issued command of: ", msg.command);
    console.log("Response code of: ", msg.code);
    console.log("Data returned: ", msg.values);
});


/* Read 1 registers starting at DM register 00000 */
client.read('D1102',1,function(err,bytes) {
	console.log("Bytes: ", bytes);

});

console.log(client);

/* Write 1337 to DM register 00000 */
client.write('D1010',1337)


/* Write 12,34,56 in DM registers 00000 00001 00002 */
// client.write('D00000',[12,34,56]);
