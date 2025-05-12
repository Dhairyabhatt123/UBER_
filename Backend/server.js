const app = require('./app');
const http = require('http');

const server = http.createServer(app);

server.listen(process.env.PORT,()=>{
    console.log(`server is running at ${process.env.PORT}`);
})