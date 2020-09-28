module.exports = (sequelize, DataTypes) =>{
    const Pais = sequelize.define (
      'Pais', {
        paisId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        paisNombre: {
          type: DataTypes.STRING(40),
          unique: true
        },
        paisEstado: {
          type: DataTypes.STRING(1),//A-ACTIVO I-INACTIVO
        }
      }
    );
    return Pais;
};
