const express = require("express");
const mysql = require("mysql");

const app = express();
var db = mysql.createConnection({
  host: "77.72.0.150",
  user: "backend_app",
  password: "!LoLeQ3@1",
  database: "backend_app",
});
app.get("/api/createtable", (req, res) => {
  let sql = `INSERT INTO users VALUES (DEFAULT, 'lol',  'ttt')`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Created");
  });
});

app.get("/api", (req, res) => {
  res.send("111 Homepageeee !!!");
});
db.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});
app.listen("3400", () => {
  console.log("Hosted on port 3400");
});
