const mongoose = require('mongoose');

const Book = new mongoose.Schema({
    title: { type: String, required: true },
    user: { type: String, required: true },
    yearPublished: { type: String, required: true },
    price: { type: String, required: true },
    rating: { type: String, required: true }
})
  
module.exports = mongoose.model('Book', Book)


