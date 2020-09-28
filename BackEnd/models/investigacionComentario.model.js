module.exports = (sequelize, DataTypes) => {
  const InvestigacionComentario = sequelize.define(
    'InvestigacionComentario', {
      investigacionComentarioId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      investigacionComentarioNombre: {
        type: DataTypes.STRING(40),
      },
      investigacionComentarioCorreo: {
        type: DataTypes.STRING(100),
      },
      investigacionComentarioPuntaje: {
        type: DataTypes.INTEGER,
      },
      investigacionComentarioText: {
        type: DataTypes.STRING(1024),
      },
      investigacionComentarioFecha: {
        type: DataTypes.DATE,
      },
      investigacionComentarioEstado: {
        type: DataTypes.STRING(1), //A-ACTIVO I-INACTIVO
      }
    }
  );
  return InvestigacionComentario;
};
