module.exports = (sequelize, DataTypes) =>{
    const Postulacion = sequelize.define (
      'Postulacion', {
        postulacionId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        postulacionNombre: {
          type: DataTypes.STRING(40),
        },
        postulacionCorreo: {
          type: DataTypes.STRING(100),
        },
        postulacionOcupacion: {
          type: DataTypes.STRING(100),
        },
        postulacionTitulo: {
          type: DataTypes.STRING(40),
        },
        postulacionResumen: {
          type: DataTypes.TEXT,
        },
        postulacionPalabrasClave: {
          type: DataTypes.STRING(100),
        },
        postulacionEstado: {
          type: DataTypes.STRING(1),//A-ACTIVO I-INACTIVO
        }
      }
    );
    return Postulacion;
};
