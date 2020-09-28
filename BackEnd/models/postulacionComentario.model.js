module.exports = (sequelize, DataTypes) =>{
    const PostulacionComentario = sequelize.define (
      'PostulacionComentario', {
        postulacionComentarioId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        postulacionComentarioFecha: {
          type: DataTypes.DATE,
        },
        postulacionComentarioTexto: {
          type: DataTypes.TEXT,
        },
        postulacionComentarioEstado: {
          type: DataTypes.STRING(1),//A-ACTIVO I-INACTIVO
        }
      }
    );
    return PostulacionComentario;
};
