// DEPENDENCY IMPORTS //

import express from "express";
import cors from "cors";
import UserRouters from "./routes/UserRoutes.js";
import BookRouters from "./routes/BookRoutes.js";
// import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use("/book", BookRouters);
app.use("/User", UserRouters);
// app.use(bodyParser());

app.listen(4000, () => {
  console.log("Listening to port");
});
