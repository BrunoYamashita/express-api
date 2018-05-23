'use strict'

const mongoose = require('mongoose');
let user = require('./src/schemas/users');
let Book = require('./src/schemas/books');
let bookSeed = require('./src/schemas/seed/books.json');
let userSeed = require('./src/schemas/seed/users.json');
let connectionString = process.env.NODE_ENV == 'production' ?
    'mongodb://mongo:27017/store' :
    'mongodb://localhost/store'

mongoose.connect(connectionString)
    .catch(err => {
        console.log(err);
        proccess.exit(1)
    })
    .then(() => {
        Book.insertMany(bookSeed,(error, docs) => {
            if (error) {
                console.log(error);
                process.exit(1);
            }
            user.insertMany(userSeed, (error, docs) => {
                if (error) {
                    console.log(error);
                    process.exit(1);
                }
                console.log('Sucessfully seeded');
                process.exit(0)
            })
        })


    })
