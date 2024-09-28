const { Router } = require("express");
const ParticipanteController = require("../controller/ParticipanteController");
const { validateUser, validateEventoId } = require("../middlewares/validate");

const router = Router();


router.post("/participante", validateUser, (req, res) => {
    ParticipanteController.create(req, res);
});
router.get("/participante", validateUser, (req, res) => {
    ParticipanteController.getAll(req, res);
});
router.get("/participante/:id", validateUser, validateEventoId, (req, res) => {
    ParticipanteController.getOne(req, res);
});
router.delete("/participante/:id", validateUser, validateEventoId, (req, res) => {
    ParticipanteController.delete(req, res);
});
router.put("/participante/:id", validateUser, validateEventoId, (req, res) => {
    ParticipanteController.update(req, res);
});

module.exports = router;
