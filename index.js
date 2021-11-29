var SerialPort = require('serialport');
// var SerialPort = serialport.SerialPort;
var parsers = SerialPort.parsers;

var port = new SerialPort('COM3', {
  baudRate: 115200,
  parser: parsers.raw
});

// console.log(port)
port.on('open', function() {
  console.log('Port open');
});
port.write()
port.on('data', function(data) {
  console.log(data);
});
