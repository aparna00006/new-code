const http = require('http');


const server = http.createServer((req,res)=>{
    const url= req.url;
    if(url=='/'){
        res.write('<html><title>Create server</title><body><h2>Wlecome create server !</h2></body></html');
    }

    if(url==='/home'){
        res.write('<html><title>Create server</title><body><h2>Wlecome home</h2></body></html');
    }
    if(url==='/about'){
        res.write('<html><title>Create server</title><body><h2>Wlecome to About us page</h2></body></html');
    }
    if(url==='/node'){
        res.write('<html><title>Create server</title><body><h2>Wlecome to my Nodejs project</h2></body></html');
    }
});

server.listen(4000);