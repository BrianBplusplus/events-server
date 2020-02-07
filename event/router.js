const { Router } = require("express");
const Event = require("./model");

const router = new Router();

router.get("/events", (req, res, next) => {
  console.log("request received at " + new Date());
  Event.findAll().then(event => res.json(event));
});

router.post("/events", (req, res, next) => {
  const { name, date, description } = req.body;
  Event.create({ name: name, date: date, description: description })
    .then(event => {
      console.log("Created an event!");
      res.json(event);
    })
    .catch(error => next(error));
});

module.exports = router;
