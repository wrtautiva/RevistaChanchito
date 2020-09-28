const dbManager = require('../database/db.manager');


/**
 * Retonar todos los regitros
 */
async function retornarPaises(req, res) {
  try {
    //Ejecucion metodo
    const paises = await dbManager.Pais.findAll();

    res.json({
      data: paises
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
async function crearPais(req, res) {
  // Crear objeto
  const nuevoPais = {
    paisNombre: req.body.paisNombre,
    paisEstado: req.body.paisEstado
  }

  //Ejecucion metodo
  dbManager.Pais.create(nuevoPais).then(
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
async function retonarPais(req, res) {
  try {
    const {
      paisId
    } = req.params;
    //Ejecucion metodo
    const pais = await dbManager.Pais.findOne({
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
async function actualizarPais(req, res) {
  try {
    const {
      paisId
    } = req.params;

    //Ejecucion metodo
    const resultado = await dbManager.Pais.update({
      paisNombre: req.body.paisNombre,
      paisEstado: req.body.paisEstado
    }, {
      where: {
        paisId: paisId
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
async function eliminarPais(req, res) {
  try {
    const {
      paisId
    } = req.params;

    //Ejecucion metodo
    const resultado = await dbManager.Pais.destroy({
      where: {
        paisId: paisId
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

exports.retornarPaises = retornarPaises;
exports.crearPais = crearPais;
exports.retonarPais = retonarPais;
exports.actualizarPais = actualizarPais;
exports.eliminarPais = eliminarPais;
