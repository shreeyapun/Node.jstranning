// node.js

// node.js is a javascript






// example of simple node.js server
const http= require('http');

// create server
const server=http.createServer((req,res)=>{
    res.end('hello from node.js served');
});
// start server on port 3000
server.listen (3000,()=>{
    console.log('server is running on http://localhost:3000');
});