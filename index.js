const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const eventRouter = require("./event/router");

const app = express();
const port = 4000;

const middleware = cors();
app.use(middleware);

const jsonParser = bodyParser.json();
app.use(jsonParser);

app.use(eventRouter);

app.get("/test", (request, response) => {
  console.log("Hello world");
});

app.listen(port, () => console.log(`Listening on ${port}`));
