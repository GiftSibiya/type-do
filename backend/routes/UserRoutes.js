import express from "express";
import {
  GetUser,
  AddUser,
  UpdateUser,
  DeleteUser,
} from "../controllers/UserController.js";

const UserRouter = express.Router();

UserRouter.get("/", GetUser);
UserRouter.post("/", AddUser);
UserRouter.put("/", UpdateUser);
UserRouter.delete("/", DeleteUser);

export default UserRouter;
