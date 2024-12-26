import express from 'express';
import { booksController } from './books.controllers';

const router = express.Router();

router.post('/', booksController.createBooks);
router.get('/', booksController.getBooks);
router.get('/:bookId', booksController.getSingleBook);

export const bookRoutes = router;
