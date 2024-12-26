import { TBook } from './books.interface';
import { BookModel } from './books.model';

const createBooksToDb = async (books: TBook) => {
  const result = await BookModel.create(books);

  return result;
};

const getBooksFromDb = async () => {
  const result = await BookModel.find({});
  return result;
};

const getSingleBooksFromDb = async (_id: string) => {
  const result = await BookModel.findOne({ _id });
  return result;
};

export const bookServices = {
  createBooksToDb,
  getBooksFromDb,
  getSingleBooksFromDb,
};
