const express = require('express');
const bookModel = require('../models/book');
let router = express.Router();

/**
 * Get books by title part
 * @returns Array of books objects filtered by title part
 */
router.get('/by-title/:title', async function (req, res, next) {
  try {
    let name = req.params.title;
    const books = await bookModel.findByTitlePart(name);
    res.json(books);

  } catch (error) {
    next(error);
  }

});

/**
 * Get books by author part name
 * @returns Array of books objects filtered by author name part
 */
router.get('/by-author/:name', async function (req, res, next) {
  try {
    let name = req.params.name;
    const books = await bookModel.findByAuthorPart(name);
    res.json(books);
    
  } catch (error) {
    next(error);
  }
 
});

/**
 * Get books list
 * @returns Array of books objects
 */
router.get('', async function (req, res, next) {
  try {
    const books = await bookModel.find();
    res.json(books);

  } catch (error) {
    next(error);
  }

});

/**
 * Update one book by ID
 * @returns Book updated object
 */
router.put('/:id', async function (req, res, next) {
  try {
    let id = req.params.id;
    let book = req.body.book;
    const books = await bookModel.update(id, book);
    res.json(book);
  } catch (error) {
    next(error);
  }

});

/**
 * Create one book
 * @returns Book updated object
 */
router.post('/', async function (req, res, next) {
  try {
    let book = req.body.book;
    const books = await bookModel.create(book);
    res.json(books);
  } catch (error) {
    next(error);
  }

});

/**
 * Delete one Book by its id
 */
router.delete('/:id', async function (req, res, next) {
  try {
    let id = req.params.id;
    const books = await bookModel.deleteOne(id);
    res.json(books);
  } catch (error) {
    next(error);
  }

});

module.exports = router;