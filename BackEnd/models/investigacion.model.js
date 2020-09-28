module.exports = (sequelize, DataTypes) =>{
    const Investigacion = sequelize.define (
      'Investigacion', {
        investigacionId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        investigacionTitulo: {
          type: DataTypes.STRING(40),
        },
        investigacionDescripcion: {
          type: DataTypes.STRING(200),
        },
        investigacionNombreAutor: {
          type: DataTypes.STRING(100),
        },
        investigacionFotoAutor: {
          type: DataTypes.STRING(100),//**RUTA URL IMAGEN*//
        },
        investigacionPalarasClave: {
          type: DataTypes.STRING(100),
        },
        investigacionResumen: {
          type: DataTypes.TEXT,//A-ACTIVO I-INACTIVO
        },
        investigacionURL: {
          type: DataTypes.STRING(100),
        },
        investigacionEstado: {
          type: DataTypes.STRING(1),//A-ACTIVO I-INACTIVO
        }
      }
    );
    return Investigacion;
};
