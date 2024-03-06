import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "BLU123",
  database: "test",
});

export { db };
