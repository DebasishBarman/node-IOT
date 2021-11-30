const SerialPort = require('serialport')
const portName = 'COM3'
var port = new SerialPort(portName, {baudRate: 115200,autoOpen:false, parser: SerialPort.parsers.raw})


//**** SENDING

var sent_data = '4'

port.open(function(err){
  if(err){
    return console.log('Here'+err.message)
  }
  port.write(sent_data, function(err){
  if(err){
      return console.log('Error on write', err.message);
   }
   console.log('Port.write: ', sent_data);
  });
  port.on('data',(data)=>{
      console.log(String(data))
  })

})

// //****RECEIVING
// // port.write('a')
// port.on('data', function(data){
// console.log(data);
//   // decoding uint8Array to string
// //   if (!("TextDecoder" in window))
// //     console.log("Sorry, this browser does not support TextDecoder...");
// //   var enc = new TextDecoder();
// //   var arr = new Uint8Array(data);
// //   ready = enc.decode(arr)

// //   console.log('Data received: ', ready);
// });

port.on('readable', function () {
  console.log('Data2:', port.read());
});

// port.on('error',function(err){
//     console.log(err)
// })
