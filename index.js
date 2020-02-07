const express = require("express");
const db = require("./db");
const app = express();
const port = 4000;

app.get("/test", (request, response) => {
  console.log("Hello world");
});

app.listen(port, () => console.log(`Listening on ${port}`));
