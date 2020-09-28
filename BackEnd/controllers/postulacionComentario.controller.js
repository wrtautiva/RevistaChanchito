const dbManager = require('../database/db.manager');


/**
 * Retonar todos los regitros
 */
async function retornarPostulacionComentarios(req, res) {
  try {
    //Ejecucion metodo
    const nuevaspostulacionesCometarios = await dbManager.PostulacionComentario.findAll();

    res.json({
      data: nuevaspostulacionesCometarios
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
async function crearPostulacionComentario(req, res) {
  // Crear objeto
  const nuevaspostulacionesCometario = {
    postulacionComentarioFecha: req.body.postulacionComentarioFecha,
    postulacionComentarioTexto: req.body.postulacionComentarioTexto,
    postulacionComentarioEstado: req.body.postulacionComentarioEstado,
    postulacionId: req.body.postulacionId
  }

  //Ejecucion metodo
  dbManager.PostulacionComentario.create(nuevaspostulacionesCometario).then(
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
async function retonarPostulacionComentario(req, res) {
  try {
    const {
      postulacionComentarioId
    } = req.params;
    //Ejecucion metodo
    const postulacio = await dbManager.PostulacionComentario.findOne({
      where: {
        postulacionComentarioId: postulacionComentarioId
      }
    });
    res.json(pais);

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
async function actualizarPostulacionComentario(req, res) {
  try {
    const {
      postulacionComentarioId
    } = req.params;

    //Ejecucion metodo
    const resultado = await dbManager.PostulacionComentario.update({
      postulacionComentarioFecha: req.body.postulacionComentarioFecha,
      postulacionComentarioTexto: req.body.postulacionComentarioTexto,
      postulacionComentarioEstado: req.body.postulacionComentarioEstado,
      postulacionId: req.body.postulacionId
    }, {
      where: {
        postulacionComentarioId: postulacionComentarioId
      }
    })
    if (resultado == 1) {
      res.status(200).json({
        message: "Registro Actulizado"
      });
    };
    if (resultado != 1) {
      res.status(400).json({
        message: "El Registro no existe en el sistema"
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
async function eliminarPostulacionComentario(req, res) {
  try {
    const {
      postulacionId
    } = req.params;

    //Ejecucion metodo
    const resultado = await dbManager.PostulacionComentario.destroy({
      where: {
        postulacionComentarioId: postulacionComentarioId
      }
    })
    if (resultado == 1) {
      res.status(200).json({
        message: "Registro Eliminado"
      });
    };
    if (resultado == 0) {
      res.status(400).json({
        message: "El Registro no existe en el sistema"
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

exports.retornarPostulacionComentarios = retornarPostulacionComentarios;
exports.crearPostulacionComentario = crearPostulacionComentario;
exports.retonarPostulacionComentario = retonarPostulacionComentario;
exports.actualizarPostulacionComentario = actualizarPostulacionComentario;
exports.eliminarPostulacionComentario = eliminarPostulacionComentario;
