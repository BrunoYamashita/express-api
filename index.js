let app = require('./bin/app');
const http = require('http');
const mongoose = require('mongoose');
let port = process.env.PORT || '3000';
let connectionString = process.env.NODE_ENV == 'production'
  ? 'mongodb://mongo:27017/local'
  : 'mongodb://localhost/local'

mongoose.connect(connectionString).catch(err=>{
    console.log(err);
    proccess.exit(1)
})

server = http.createServer(app);
server.listen(port,()=>{
    console.log(`Listening on ${port}`);
});

