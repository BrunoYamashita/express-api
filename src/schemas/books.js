const mongoose = require('mongoose');

const Book = new mongoose.Schema({
    title: { type: String},
    user: { type: String},
    yearPublished: { type: String},
    price: { type: String},
    rating: { type: String}
})
  
module.exports = mongoose.model('Book', Book)
