// DEPENDENCY IMPORTS //

import express from "express";
import cors from "cors";
import routers from "./routes/Routes.js";
// import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use("/api", routers);
// app.use(bodyParser());

app.listen(4000, () => {
  console.log("Listening to port");
});
