const dbManager = require('../database/db.manager');


/**
 * Retonar todos los regitros
 */
async function retornarInvestigaciones(req, res) {
  try {
    //Ejecucion metodo
    const investigaciones = await dbManager.Investigacion.findAll();

    res.json({
      data: investigaciones
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
async function crearInvestigacion(req, res) {
  // Crear objeto
  const nuevaInvestigacion = {
    investigacionTitulo: req.body.investigacionTitulo,
    investigacionDescripcion: req.body.investigacionDescripcion,
    investigacionNombreAutor: req.body.investigacionNombreAutor,
    investigacionFotoAutor: req.body.investigacionFotoAutor,
    investigacionPalarasClave: req.body.investigacionPalarasClave,
    investigacionResumen: req.body.investigacionResumen,
    investigacionURL: req.body.investigacionURL,
    investigacionEstado: req.body.investigacionEstado
  }
  //Ejecucion metodo
  dbManager.Investigacion.create(nuevaInvestigacion).then(
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
async function retonarInvestigacion(req, res) {
  try {
    const {
      investigacionId
    } = req.params;
    //Ejecucion metodo
    const investigacion = await dbManager.Contacto.findOne({
      where: {
        investigacionId: investigacionId
      }
    });
    res.json(investigacion);

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
async function actualizarInvestigacion(req, res) {
  try {
    const {
      investigacionId
    } = req.params;

    //Ejecucion metodo
    const resultado = await dbManager.Investigacion.update({
      investigacionTitulo: req.body.investigacionTitulo,
      investigacionDescripcion: req.body.investigacionDescripcion,
      investigacionNombreAutor: req.body.investigacionNombreAutor,
      investigacionFotoAutor: req.body.investigacionFotoAutor,
      investigacionPalarasClave: req.body.investigacionPalarasClave,
      investigacionResumen: req.body.investigacionResumen,
      investigacionURL: req.body.investigacionURL,
      investigacionEstado: req.body.investigacionEstado
    }, {
      where: {
        investigacionId: investigacionId
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
async function eliminarInvestigacion(req, res) {
  try {
    const {
      investigacionId
    } = req.params;

    //Ejecucion metodo
    const resultado = await dbManager.Investigacion.destroy({
      where: {
        investigacionId: investigacionId
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

exports.retornarInvestigaciones = retornarInvestigaciones;
exports.crearInvestigacion = crearInvestigacion;
exports.retonarInvestigacion = retonarInvestigacion;
exports.actualizarInvestigacion = actualizarInvestigacion;
exports.eliminarInvestigacion = eliminarInvestigacion;
