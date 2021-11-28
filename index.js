const SerialPort = require('serialport')


var id='COM2'
SerialPort.list().then((d)=>{
    // console.log(d)
}).catch((err)=>console.log(err))

// console.log(SerialPort)


const port=new SerialPort('COM3',{
    baudRate:9600,
  
});

console.log(port)

port.on('open',function(){
    console.log('open');
    port.on('data',function(data){
        console.log(data._readableState.buffer)
    })
})


