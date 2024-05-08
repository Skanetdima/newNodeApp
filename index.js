const express = require("express");

const app = express();

app.listen(3000, "0.0.0.0");

app.get("/", (req, res) => {
  res.send("<h1>Hello Bro</h1>");
});
