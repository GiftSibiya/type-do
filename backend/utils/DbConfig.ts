import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhsot",
  user: "root",
  password: "BLU123",
  database: "test",
});
