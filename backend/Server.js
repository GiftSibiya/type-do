// DEPENDENCY IMPORTS //

import express from "express";
import cors from "cors";
import UserRouters from "./routes/UserRoutes.js";
import BookRouters from "./routes/BookRoutes.js";
// import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/book", BookRouters);
app.use("/user", UserRouters);

app.listen(4000, () => {
  console.log("Listening to port");
});
