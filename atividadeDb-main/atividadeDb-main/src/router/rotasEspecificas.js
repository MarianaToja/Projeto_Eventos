const { Router } = require("express");
const ParticipanteController = require("../controller/ParticipanteController");

const router = Router();


router.get("/evento/:id/participante", (req, res) => {
    ParticipanteController.getEvento(req, res);
});
router.get("/participante/por-evento/:eventoId", (req, res) => {
    ParticipanteController.getByEventoId(req, res);
});

module.exports = router;
