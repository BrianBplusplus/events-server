const express = require("express");
const eventRouter = require("./event/router");
const bodyParser = require("body-parser");

const app = express();
const port = 4000;
const jsonParser = bodyParser.json();

app.use(jsonParser);
app.use(eventRouter);

app.get("/test", (request, response) => {
  console.log("Hello world");
});

app.listen(port, () => console.log(`Listening on ${port}`));
