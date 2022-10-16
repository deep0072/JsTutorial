const express = require("express");

const app = express(); // used to get all functionalities of express
app.get("/", (req, res) => {
  res.send("hello i am exprejjoijhss!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
