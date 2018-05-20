const Book = require('../schemas/books');

/**
 * Find books by title part
 * @param {String} param book title part
 * @returns book object less password field
 */
exports.findByTitlePart = async function (param) {
  try {
    return await Book.find({'title': {
      '$regex': param,
      '$options': 'i'
    }
  })

  } catch (err) {
    throw err;
  }
}

/**
 * Find books by author name part
 * @param {String} param book title part
 * @returns book object less password field
 */
exports.findByAuthorPart = async function (param) {
  try {
    return await Book.find({'user': {
      '$regex': param,
      '$options': 'i'
    }
  })

  } catch (err) {
    throw err;
  }
}

/**
 * Get list of books
 * @returns Array of Book objects
 */
exports.find = async function () {
  try {
    return await Book.find()

  } catch (err) {
    throw err;
  }
}

/**
 * Find and update book by its ID
 * @param { ObjectId } id Book mongo ObjectId 
 * @param { Book } book Book Object to be updated
 */
exports.update = async function (id, book) {
  try {

    return await Book.findByIdAndUpdate(id,book);

  } catch (err) {
    throw err;
  }
}

/**
 * Create a book
 * @param { Book } book Book Object to be created
 */
exports.create = async function (book) {
  try {
    book = new Book(book);
    return await book.save();

  } catch (err) {
    throw err;
  }
}

/**
 * Delete One book by its ID
 * @param { ObjectId } id Book mongo ObjectId 
 */
exports.deleteOne = async function (id) {
  try {
    return await Book.deleteOne({'_id': id})

  } catch (err) {
    throw err;
  }
}
