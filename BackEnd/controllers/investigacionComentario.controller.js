const dbManager = require('../database/db.manager');


/**
 * Retonar todos los regitros
 */
async function retornarInvestigacioneComentarios(req, res) {
  try {
    //Ejecucion metodo
    const investigacioneComentarios = await dbManager.InvestigacionComentario.findAll();

    res.json({
      data: investigacioneComentarios
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      message: e.name,
      error: e.parent.sqlMessage
    });
  }
}
/**
 * Crear regitro
 */
async function crearInvestigacionComentario(req, res) {
  // Crear objeto
  const nuevaInvestigacionComentario = {
    investigacionComentarioNombre: req.body.investigacionComentarioNombre,
    investigacionComentarioCorreo: req.body.investigacionComentarioCorreo,
    investigacionComentarioPuntaje: req.body.investigacionComentarioPuntaje,
    investigacionComentarioText: req.body.investigacionComentarioText,
    investigacionComentarioFecha: req.body.investigacionComentarioFecha,
    investigacionComentarioEstado: req.body.investigacionComentarioEstado,
    paisId: req.body.paisId,
    investigacionId: req.body.investigacionId
  }
  //Ejecucion metodo
  dbManager.InvestigacionComentario.create(nuevaInvestigacionComentario).then(
    data => {
      res.send(data);
    }
  ).catch(
    e => {
      console.log(e);
      res.status(500).send({
        message: e.name,
        error: e.parent.sqlMessage
      });
    }
  );
}

/**
 * Retonar registro por Id
 */
async function retonarInvestigacionComentario(req, res) {
  try {
    const {
      investigacionComentarioId
    } = req.params;
    //Ejecucion metodo
    const investigacionComentario = await dbManager.InvestigacionComentario.findOne({
      where: {
        investigacionComentarioId: investigacionComentarioId
      }
    });
    res.json(investigacionComentario);

  } catch (e) {
    console.log(e);
    res.status(500).send({
      message: e.name,
      error: e.parent.sqlMessage
    });
  }
}
/**
 * Actualizar registro por Id
 */
async function actualizarInvestigacionComentario(req, res) {
  try {
    const {
      investigacionComentarioId
    } = req.params;

    //Ejecucion metodo
    const resultado = await dbManager.InvestigacionComentario.update({
      investigacionComentarioNombre: req.body.investigacionComentarioNombre,
      investigacionComentarioCorreo: req.body.investigacionComentarioCorreo,
      investigacionComentarioPuntaje: req.body.investigacionComentarioPuntaje,
      investigacionComentarioText: req.body.investigacionComentarioText,
      investigacionComentarioFecha: req.body.investigacionComentarioFecha,
      investigacionComentarioEstado: req.body.investigacionComentarioEstado,
      paisId: req.body.paisId,
      investigacionId: req.body.investigacionId
    }, {
      where: {
        investigacionComentarioId: investigacionComentarioId
      }
    })
    if (resultado == 1) {
      res.status(200).json({
        message: "Registro Actulizado"
      });
    };
    if (resultado != 1) {
      res.status(400).json({
        message: "El registro no existe en el sistema"
      });
    };
  } catch (e) {
    console.log(e);
    res.status(500).send({
      message: e.name,
      error: e.parent.sqlMessage
    });
  }
}

/**
 * Eliminar registro por Id
 */
async function eliminarInvestigacionComentario(req, res) {
  try {
    const {
      investigacionComentarioId
    } = req.params;

    //Ejecucion metodo
    const resultado = await dbManager.InvestigacionComentario.destroy({
      where: {
        investigacionComentarioId: investigacionComentarioId
      }
    })
    if (resultado == 1) {
      res.status(200).json({
        message: "Registro Eliminado"
      });
    };
    if (resultado == 0) {
      res.status(400).json({
        message: "El registro no existe en el sistema"
      });
    };
  } catch (e) {
    console.log(e);
    res.status(500).send({
      message: e.name,
      error: e.parent.sqlMessage
    });
  }
}

exports.retornarInvestigacioneComentarios = retornarInvestigacioneComentarios;
exports.crearInvestigacionComentario = crearInvestigacionComentario;
exports.retonarInvestigacionComentario = retonarInvestigacionComentario;
exports.actualizarInvestigacionComentario = actualizarInvestigacionComentario;
exports.eliminarInvestigacionComentario = eliminarInvestigacionComentario;
