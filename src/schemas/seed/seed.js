'use strict'

const mongoose = require('mongoose');
let user = require('../users');
let Book = require('../books');
let bookSeed = require('./books.json');
let authorSedd = require('./users.json');
mongoose.connect('mongodb://localhost:27017/local')
.catch(err=>{
    console.log(err);
    proccess.exit(1)
})
.then(() => {
    Book.insertMany(bookSeed)
        .catch(err =>{
            console.log(err);
        })

    user.insertMany(authorSedd)
        .catch(err => {
            console.log(err);
        }) 
        .then(()=>{
            console.log('Sucessfully seeded');
            process.exit(0)
        })
   
})

