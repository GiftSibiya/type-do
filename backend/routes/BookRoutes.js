import express from "express";
import {
  GetBooks,
  AddBooks,
  UpdateBooks,
  DeleteBooks,
} from "../controllers/BookController.js";

const BookRouter = express.Router();

BookRouter.get("/", GetBooks);
BookRouter.post("/AddBook", AddBooks);
BookRouter.put("/UpdateBook/:id", UpdateBooks);
BookRouter.delete("/DeleteBook/:id", DeleteBooks);

export default BookRouter;
