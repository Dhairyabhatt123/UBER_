const router = require('./app');
const http = require('http');

const server = http.createServer(app);

server.listen(port,()=>{
    console.log(`server is running at ${port}`);
})