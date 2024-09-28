const { Router } = require("express");
const participanteRoutes = require("./participante");
const eventoRoutes = require("./evento");
const rotasEspecificas = require("./rotasEspecificas.js");

const router = Router();


router.use(participanteRoutes);
router.use(eventoRoutes);
router.use(rotasEspecificas);

module.exports = router;
