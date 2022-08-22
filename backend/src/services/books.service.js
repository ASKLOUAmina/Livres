import { books } from '../mocks/books.mock.js';
import { v4 as uuidv4 } from 'uuid';

const getBooks = () => {
	try {
		return books;
	} catch (e) {
		throw Error('Error while fetching student.');
	}
};

const getBook = (bookId) => {
	try {
		console.log(bookId);
		const book = books.find((book) => book._id.toString() === bookId);
		console.log(book);
		return book;
	} catch (e) {
		throw Error(`Oops, something went wrong.${e}`);
	}
};

const createBook = (title, author, editor, date) => {
	try {
		const newBook = {
			id: uuidv4(),
			title: title,
			author: author,
			editor: editor,
			date: date,
		};
		books.push(newBook);
		return books;
	} catch (e) {
		throw Error(`Oops, something went wrong.${e}`);
	}
};

const updateBook = (body) => {
	console.log(body);
	try {
		const bookToUpdate = getBook(body.bookId.toString());
		if (bookToUpdate) {
			bookToUpdate.title = body.title;
			bookToUpdate.author = body.author;
			bookToUpdate.editor = body.editor;
			bookToUpdate.date = body.date;
			return bookToUpdate;
		}
		throw Error("book doesn't exist");
	} catch (e) {
		throw Error(`Oops, something went wrong.${e}`);
	}
};

const deleteBook = (bookId) => {
	try {
		books.filter((book) => book._id.toString() !== bookId);
	} catch (e) {
		throw Error(`Oops, something went wrong.${e}`);
	}
};

export { getBooks, getBook, createBook, updateBook, deleteBook };
