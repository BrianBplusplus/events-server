const { Router } = require("express");
const Event = require("./model");

const router = new Router();

//CRUD CREATE
router.post("/events", (req, res, next) => {
  const { name, date, description } = req.body;
  Event.create({ name: name, date: date, description: description })
    .then(event => {
      res.json(event);
    })
    .catch(error => next(error));
});

//CRUD READ
router.get("/events", (req, res, next) => {
  console.log("request received at " + new Date());
  Event.findAll()
    .then(event => res.json(event))
    .catch(error => next(error));
});

//CRUD UPDATE
router.put("/events/:id", (request, response, next) =>
  Event.findByPk(request.params.id)
    .then(event => event.update(request.body))
    .then(event => response.send(event))
    .catch(error => next(error))
);

//CRUD DELETE
router.delete("/events/:id", (request, response, next) =>
  Event.destroy({ where: { id: request.params.id } })
    .then(number => response.send({ number }))
    .catch(next)
);

module.exports = router;
