
const Express = require("express");
const { getAllBooks, createBook, updateBook, BookById, deleteBook, searchBooks } = require("../Controllers/bookController");

const BookRoute = Express.Router()

BookRoute.get('/', getAllBooks)
BookRoute.post('/add', createBook)
BookRoute.post('/search', searchBooks)
BookRoute.post('/update', updateBook)

BookRoute.get('/:id', BookById)

BookRoute.post('/delete', deleteBook)

module.exports = BookRoute
