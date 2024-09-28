const Participante = require("../models/Participante");

const ParticipanteController = {
    
    create: async (req, res) => {
        try {
            const { nome, email, eventoId } = req.body;
            const participanteExistente = await Participante.findOne({
                where: { email, eventoId }
            });

            if (participanteExistente) {
                return res.status(400).json({
                    msg: "email já cadastrado"
                });
            }
            const participanteCriado = await Participante.create({ nome, email, eventoId });

            return res.status(200).json({
                msg: "Participante criado com sucesso",
                participante: participanteCriado,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte" });
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { nome, email, eventoId } = req.body;

            const participante = await Participante.findByPk(id);

            if (!participante) {
                return res.status(404).json({ msg: "Participante não encontrado" });
            }

            const updated = await participante.update({ nome, email, eventoId });

            return res.status(200).json({
                msg: "Participante atualizado com sucesso",
                participante: updated,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte" });
        }
    },

    getAll: async (req, res) => {
        try {
            const participantes = await Participante.findAll();
            return res.status(200).json({
                msg: "Participantes encontrados",
                participantes,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte" });
        }
    },

    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const participante = await Participante.findByPk(id);

            if (!participante) {
                return res.status(404).json({ msg: "Participante não encontrado" });
            }

            return res.status(200).json({
                msg: "Participante encontrado com sucesso",
                participante,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte" });
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params;

            const participante = await Participante.findByPk(id);
            if (!participante) {
                return res.status(404).json({ msg: "Participante não encontrado" });
            }

            await participante.destroy();

            return res.status(200).json({
                msg: "Participante deletado com sucesso",
                participante,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte" });
        }
    },

    getEvento: async (req, res) => {
        try {
            const { id } = req.params;
            const participantes = await Participante.findAll({ where: { eventoId: id } });

            if (!participantes.length) {
                return res.status(404).json({ msg: "Participante não encontrado" });
            }

            return res.status(200).json({
                msg: "Participantes encontrados",
                participantes,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte" });
        }
    },

   
    getByEventoId: async (req, res) => {
        try {
            const { eventoId } = req.params;
            const participantes = await Participante.findAll({ where: { eventoId } });

            if (!participantes.length) {
                return res.status(404).json({ msg: "Participantes não encontrados" });
            }

            return res.status(200).json({
                msg: "Participantes encontrados",
                participantes,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte" });
        }
    },
};

module.exports = ParticipanteController;
