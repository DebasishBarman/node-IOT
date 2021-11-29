const SerialPort = require('serialport');
// var serialport=require('serialport')
// var serialport=serialport.SerialPort;
var portName=process.argv[2];

var myport=new SerialPort(portName,{
    baudRate:115200,
    parsers:SerialPort.parsers
})

myport.on('open',onOpen)
// myport.write('Hellpo')
myport.on('data',onData)

function onOpen(){
console.log('Open Connection');
}
function onData(data){
    console.log('Data is '+data);

}


// myport.