const validateUser = (req, res, next) => {
    const { nome, email, eventoId} = req.body;
  
    if (!nome || !email || !eventoId) {
      return res.status(400).json({
        msg: "Campos invalidos, revise caro amigo.",
      });
    }
    return next();
  };
  
  const validateEventoId = (req, res, next) => {
    const { eventoId } = req.params;
    if (!eventoId) {
      return res.status(400).json({
        msg: "Parametro faltando",
      });
    }
  
    return next();
  };

  const validateEvent = (req, res, next) => {
    const { nome, data, localizacao} = req.body;
  
    if (!nome || !data || !localizacao) {
      return res.status(400).json({
        msg: "Campos invalidos, revise caro amigo.",
      });
    }
    return next();
  };

  
  module.exports = { validateUser, validateEventoId, validateEvent };
  