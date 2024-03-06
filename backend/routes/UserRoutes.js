import express from "express";
import {
  GetUser,
  AddUser,
  UpdateUser,
  DeleteUser,
} from "../controllers/UserController.js";

const UserRouter = express.Router();

UserRouter.get("/", GetUser);
UserRouter.post("/AddUser", AddUser);
UserRouter.put("/UpdateUser", UpdateUser);
UserRouter.delete("/DeleteUser", DeleteUser);

export default UserRouter;
