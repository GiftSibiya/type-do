import express from "express";
import GetBooks from "../controllers/UserController.js";

const router = express.Router();

router.get("/", GetBooks);

export default router;
