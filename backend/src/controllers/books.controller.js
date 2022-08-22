import * as BooksService from '../services/books.service.js';

export const getBooks = (req, res) => {
	try {
		const books = BooksService.getBooks();
		return res.status(200).json({
			status: 200,
			data: books,
			message: 'Books successfully retrieved',
		});
	} catch (e) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};

export const getBook = (req, res) => {
	try {
		const { bookId } = req.params;
		const book = BooksService.getBook(bookId);
		return res.status(200).json({
			status: 200,
			data: book,
			message: `Book with id ${bookId} successfully retrieved`,
		});
	} catch (e) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};

export const createBook = (req, res) => {
	try {
		const { title, author, editor, date } = req.body;
		const books = BooksService.createBook(title, author, editor, date);
		return res.status(200).json({
			status: 200,
			data: books,
			message: ' Books Successfully Retrieved',
		});
	} catch (e) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};

export const updateBook = (req, res) => {
	const { bookId } = req.params;

	try {
		const updatedBook = BooksService.updateBook({ bookId, ...req.body });
		return res.status(200).json({
			status: 200,
			data: updatedBook,
			message: `Book with id ${bookId} has been updated successfully `,
		});
	} catch (e) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};

export const deleteBook = (req, res) => {
	try {
		const { bookId } = req.params;
		BooksService.deleteBook(bookId);
		return res.status(200).json({
			status: 200,
			message: `Student with id ${bookId} has been deleted successfully`,
		});
	} catch (e) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};
