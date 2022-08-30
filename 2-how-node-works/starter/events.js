const { Console } = require("console");
const EventEmitter = require("events");
const http =  require('http');


class Sales extends EventEmitter{
    constructor(){
        super();
    }
}
const myEmmiter = new Sales();

myEmmiter.on('newSale' , ()=> {
    console.log("There was a new Sale");
});
myEmmiter.on('newSale', ()=> {
    console.log("Costumer name: Jonas");
})

myEmmiter.on('newSale', stock => {
    console.log(`There are now ${stock} items left in Stock`);
})
myEmmiter.emit('newSale', 9);


/////////////////////////////////

const server = http.createServer();

server.on('request', (req, res)=> {
    console.log('Request recieved!');
    res.end('Request recieved!');
});
server.on('request', (req, res)=> {
    console.log('Another Request recieved!');
});

server.on('close', ()=> {
    console.log('Server closed');
});

server.listen(8000, '127.0.0.1', () =>{
    console.log("wAITING FOR REQUESTS....");
});


