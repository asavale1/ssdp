var SSDP = require('node-ssdp').Server
  , ssdpServer = new SSDP({
    //unicastHost: '192.168.11.63',
    location: 'http://' + require('ip').address() + ':8000',
    sourcePort: 1900
  });


//ssdpServer.addUSN('upnp:rootdevice')
ssdpServer.addUSN('urn:service:jack:api')

ssdpServer.on('advertise-alive', function (heads) {
//  console.log('advertise-alive', heads)
})

ssdpServer.on('advertise-bye', function (heads) {
//  console.log('advertise-bye', heads)
})

// start server on all interfaces
ssdpServer.start()

console.log("Starting SSDP server on " + require('ip').address() + "...");

process.on('exit', function(){
  ssdpServer.stop() // advertise shutting down and stop listening 
})
