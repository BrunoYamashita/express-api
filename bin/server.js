let app = require('../app');
const http = require('http');
const mongoose = require('mongoose');
let port = process.env.PORT || '3000';

mongoose.connect('mongodb://localhost/local').catch(err=>{
    console.log(err);
    proccess.exit(1)
})

server = http.createServer(app);
server.listen(port,()=>{
    console.log(`Listening on ${port}`);
});
