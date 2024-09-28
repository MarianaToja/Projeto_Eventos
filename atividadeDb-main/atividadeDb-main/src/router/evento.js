const { Router } = require("express");
const EventoController = require("../controller/EventoController");

const router = Router();


router.post("/evento", (req, res) => {
    EventoController.create(req, res);
});
router.get("/evento", (req, res) => {
    EventoController.getAll(req, res);
});
router.get("/evento/:id", (req, res) => {
    EventoController.getOne(req, res);
});
router.delete("/evento/:id", (req, res) => {
    EventoController.delete(req, res);
});
router.put("/evento/:id", (req, res) => {
    EventoController.update(req, res);
});

module.exports = router;
