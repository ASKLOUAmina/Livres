import express from 'express';
import bodyParser from 'body-parser';
import booksRoutes from './routes/books.routes.js';

const app = express();

const HOSTNAME = '127.0.0.1';
const PORT = 5000;

app.use(bodyParser.json());

app.use('/books', booksRoutes);

app.get('/', (req, res) => {
	res.send('Hello !');
});

app.listen(PORT, () =>
	console.log(`Server is running on: http://${HOSTNAME}:${PORT}.`)
);
