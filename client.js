const net = require('net');
const inquirer = require( './inquirer' );
let isClientConnected = false;

const client = new net.Socket();
client.connect(8052, '127.0.0.1', function() {
  isClientConnected = true;
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});

async function main() {

  try {

    while( true ) {
      const { selected } = await inquirer.mainMenu();
      const options = inquirer.mainManuChoicesObject;

      switch ( selected ) {

        case options.left: {

          if( isClientConnected ) {
            client.write('left');
          }
          console.log('\n');
          break;

        }

        case options.right: {

          if( isClientConnected ) {
            client.write('right');
          }
          console.log('\n');
          break;

        }

        case options.backward: {

          if( isClientConnected ) {
            client.write('backward');
          }
          console.log('\n');
          break;

        }

        case options.forward: {

          if( isClientConnected ) {
            client.write('forward');
          }
          console.log('\n');
          break;

        }

      }
    }

  } catch ( error ) {

    console.log('error: ', error);
    process.exit( 0 );

  }

}
main();

