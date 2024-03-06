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
BookRouter.put("/", UpdateBooks);
BookRouter.delete("/", DeleteBooks);

export default BookRouter;
