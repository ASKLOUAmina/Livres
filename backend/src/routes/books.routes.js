import express from 'express';
import {
	createBook,
	deleteBook,
	getBook,
	getBooks,
	updateBook,
} from '../controllers/books.controller.js';

const router = express.Router();

router.get('/', getBooks);

router.get('/:bookId', getBook);

router.post('/', createBook);

router.put('/:bookId', updateBook);

router.delete('/:bookId', deleteBook);

export default router;
