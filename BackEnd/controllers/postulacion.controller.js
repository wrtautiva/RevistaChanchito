const dbManager = require('../database/db.manager');


/**
 * Retonar todos los regitros
 */
async function retornarPostulaciones(req, res) {
  try {
    //Ejecucion metodo
    const postulaciones = await dbManager.Postulacion.findAll();

    res.json({
      data: postulaciones
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
async function crearPostulacion(req, res) {
  // Crear objeto
  const nuevaspostulaciones = {
    postulacionNombre: req.body.postulacionNombre,
    postulacionCorreo: req.body.postulacionCorreo,
    postulacionOcupacion: req.body.postulacionOcupacion,
    postulacionTitulo: req.body.postulacionTitulo,
    postulacionResumen: req.body.postulacionResumen,
    postulacionPalabrasClave: req.body.postulacionPalabrasClave,
    postulacionEstado: req.body.postulacionEstado,
    paisId: req.body.paisId
  }

  //Ejecucion metodo
  dbManager.Postulacion.create(nuevaspostulaciones).then(
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
async function retonarPostulacion(req, res) {
  try {
    const {
      paisId
    } = req.params;
    //Ejecucion metodo
    const postulacio = await dbManager.Postulacion.findOne({
      where: {
        paisId: paisId
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
async function actualizarPostulacion(req, res) {
  try {
    const {
      paisId
    } = req.params;

    //Ejecucion metodo
    const resultado = await dbManager.Postulacion.update({
      postulacionNombre: req.body.postulacionNombre,
      postulacionCorreo: req.body.postulacionCorreo,
      postulacionOcupacion: req.body.postulacionOcupacion,
      postulacionTitulo: req.body.postulacionTitulo,
      postulacionResumen: req.body.postulacionResumen,
      postulacionPalabrasClave: req.body.postulacionPalabrasClave,
      postulacionEstado: req.body.postulacionEstado,
      paisId: req.body.paisId
    }, {
      where: {
        postulacionId: postulacionId
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
async function eliminarPostulacion(req, res) {
  try {
    const {
      postulacionId
    } = req.params;

    //Ejecucion metodo
    const resultado = await dbManager.Postulacion.destroy({
      where: {
        postulacionId: postulacionId
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

exports.retornarPostulaciones = retornarPostulaciones;
exports.crearPostulacion = crearPostulacion;
exports.retonarPostulacion = retonarPostulacion;
exports.actualizarPostulacion = actualizarPostulacion;
exports.eliminarPostulacion = eliminarPostulacion;
