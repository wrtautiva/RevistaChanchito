module.exports = (sequelize, DataTypes) => {
  const Contacto = sequelize.define(
    'Contacto', {
      contactoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      contactoNombre: {
        type: DataTypes.STRING(40),
      },
      contactoApellido: {
        type: DataTypes.STRING(40),
      },
      contactoCorreo: {
        type: DataTypes.STRING(100),
      },
      contactoAsunto: {
        type: DataTypes.TEXT,
      },
      contactoFecha: {
        type: DataTypes.DATE,
      },
      contactoEstado: {
        type: DataTypes.STRING(1), //A-ACTIVO I-INACTIVO
      }
    }
  );
  return Contacto;
};
