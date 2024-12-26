import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { bookRoutes } from './app/modules/books/books.routes';
const app: Application = express();


app.use(express.json());
app.use(cors());



app.use(express.json());
app.use(cors());


app.use("/api/v1/products",bookRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;


