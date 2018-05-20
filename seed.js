'use strict'

const mongoose = require('mongoose');
let user = require('./src/schemas/users');
let Book = require('./src/schemas/books');
let bookSeed = require('./src/schemas/seed/books.json');
let userSedd = require('./src/schemas/seed/users.json');
let connectionString = process.env.NODE_ENV == 'production'
  ? 'mongodb://mongo:27017/local'
  : 'mongodb://localhost/local'

mongoose.connect(connectionString)
.catch(err=>{
    console.log(err);
    proccess.exit(1)
})
.then(() => {
    Book.insertMany(bookSeed)
        .catch(err =>{
            console.log(err);
        })

    user.insertMany(userSedd)
        .catch(err => {
            console.log(err);
        }) 
        .then(()=>{
            console.log('Sucessfully seeded');
            process.exit(0)
        })
   
})

