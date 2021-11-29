const SerialPort = require('serialport');
// var serialport=require('serialport')
// var serialport=serialport.SerialPort;
var portName=process.argv[2];

var myport=new SerialPort(portName,{
    baudRate:115200,
    parsers:SerialPort.parsers
})
const Readline=SerialPort.parsers.Readline
var parser=new Readline()

myport.pipe(parser)
myport.on('open',onOpen)
myport.on('data',onData)

function onOpen(){
console.log('Open Connection');
    myport.write('4',(err,res)=>{
        if(err){
            console.log(err);
        }
        console.log(res);
    })
}
function onData(data){
    console.log('Data is '+data);

}



// myport.