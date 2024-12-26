import { Request, Response } from 'express';
import { bookServices } from './books.service';

const createBooks = async (req: Request, res: Response) => {
  try {
    const { book: bookData } = req.body;
    const result = await bookServices.createBooksToDb(bookData);
    res.status(200).json({
      success: true,
      message: 'books created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
      message: 'there is some error while inputting a book',
      success: false,
    });
  }
};

const getBooks = async (req: Request, res: Response) => {
  try {
    const result = await bookServices.getBooksFromDb();
    res.status(200).json({
      success: true,
      message: 'books is retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
      message: 'there is some error while  getting all the books',
      success: false,
    });
  }
};

const getSingleBook = async (req: Request, res: Response) => {
  try {
    console.log(req.params);
    const { bookId } = req.params;
    const result = await bookServices.getSingleBooksFromDb(bookId);
    console.log(result);
    res.status(200).json({
      success: true,
      message: 'book is retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
      message: 'there is some error while getting a single Book',
      success: false,
    });
  }
};

export const booksController = {
  createBooks,
  getBooks,
  getSingleBook,
};
