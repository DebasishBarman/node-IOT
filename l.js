const SerialPort = require('serialport');
// var serialport=require('serialport')
// var serialport=serialport.SerialPort;


var myport=new SerialPort('COM3',{
    baudRate:115200,
    parsers:SerialPort.parsers
})
const Readline=SerialPort.parsers.Readline
var parser=new Readline()

myport.pipe(parser)
const onData=async(data)=>{
    console.log(await data.toString())

}
myport.on('open',onOpen)
myport.on('data',onData)

function onOpen(){
console.log('Open Connection');
    // myport.write('4',(err,res)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log(res);
    // })
    myport.write(Buffer.from('5'))
}


// const SerialPort = require('serialport')
// const Readline = require('@serialport/parser-readline')
// const port = new SerialPort('COM3')
// const parser = new Readline()
// port.pipe(parser)
// parser.on('data', console.log)
// port.write('Hi Mom!')
// port.write(Buffer.from('Hi Mom!'))



// myport.