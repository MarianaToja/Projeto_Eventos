const Evento = require("../models/Evento");

const EventoController = {
    create: async (req, res) => {
        try {
            const { nome, data, localizacao } = req.body;

            const eventoCriado = await Evento.create({ nome, data, localizacao });

            return res.status(200).json({
                msg: "Evento criado com sucesso",
                evento: eventoCriado,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte" })
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { nome, data, localizacao } = req.body;

            console.log("Atualizando evento");
            const eventoUpdate = await Evento.findByPk(id);

            if (eventoUpdate == null) {
                return res.status(404).json({
                    msg: "Evento não encontrado",
                });
            }
            const updated = await eventoUpdate.update({
                nome,
                data,
                localizacao
            });

            if (updated) {
                return res.status(200).json({
                    msg: "Evento atualizado com sucesso",
                })
            }
            return res.status(500).json({
                msg: "Erro ao atualizar o usuário",
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o suporte" })
        }
    },
    getAll: async (req, res) => {
        try {
            const eventos = await Evento.findAll();
            return res.status(200).json({
                msg: "Eventos Encontrados",
                eventos,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o suporte" });
        }
    },
    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const eventoEncontrado = await Evento.findByPk(id);

            if (eventoEncontrado == null) {
                return res.status(404).json({
                    msg: "Usuário não encontrado",
                });
            }

            return res.status(200).json({
                msg: "evento encontrado com sucesso",
                evento: eventoEncontrado
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acxione o suporte" })
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;

            const eventoFinded = await Evento.findByPk(id);
            if (eventoFinded == null) {
                return res.status(404).json({
                    msg: "Evento não encontrado",
                });
            }
            await eventoFinded.destroy();

            return res.status(200).json({
                msg: "Evento deletado com sucesso!",
                evento: eventoFinded,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o suporte" })
        }
    }
};
module.exports = EventoController 