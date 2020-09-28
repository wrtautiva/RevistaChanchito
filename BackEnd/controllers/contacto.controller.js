const dbManager = require('../database/db.manager');


/**
 * Retonar todos los regitros
 */
async function retornarContactos(req, res) {
  try {
    //Ejecucion metodo
    const contactos = await dbManager.Contacto.findAll();

    res.json({
      data: contactos
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
 * Crear registro
 */
async function crearContacto(req, res) {
  // Crear objeto
  const nuevoContacto = {
    contactoNombre: req.body.contactoNombre,
    contactoApellido: req.body.contactoApellido,
    contactoCorreo: req.body.contactoCorreo,
    paisId: req.body.paisId,
    contactoAsunto: req.body.contactoAsunto,
    contactoFecha: req.body.contactoFecha,
    contactoEstado: req.body.contactoEstado
  }
  //Ejecucion metodo
  dbManager.Contacto.create(nuevoContacto).then(
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
async function retonarContacto(req, res) {
  try {
    const {
      contactoId
    } = req.params;
    //Ejecucion metodo
    const contacto = await dbManager.Contacto.findOne({
      where: {
        contactoId: contactoId
      }
    });
    res.json(contacto);

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
async function actualizarContacto(req, res) {
  try {
    const {
      contactoId
    } = req.params;

    //Ejecucion metodo
    const resultado = await dbManager.Contacto.update({
      contactoNombre: req.body.contactoNombre,
      contactoApellido: req.body.contactoApellido,
      contactoCorreo: req.body.contactoCorreo,
      paisId: req.body.paisId,
      contactoAsunto: req.body.contactoAsunto,
      contactoFecha: req.body.contactoFecha,
      contactoEstado: req.body.contactoEstado
    }, {
      where: {
        contactoId: contactoId
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
async function eliminarContacto(req, res) {
  try {
    const {
      contactoId
    } = req.params;

    //Ejecucion metodo
    const resultado = await dbManager.Contacto.destroy({
      where: {
        contactoId: contactoId
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

exports.retornarContactos = retornarContactos;
exports.crearContacto = crearContacto;
exports.retonarContacto = retonarContacto;
exports.actualizarContacto = actualizarContacto;
exports.eliminarContacto = eliminarContacto;
