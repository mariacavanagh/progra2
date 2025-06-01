module.exports = function(sequelize, dataTypes){
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED

        },
        productoId: {
            type: dataTypes.INTEGER.UNSIGNED
        },
        usuarioId:{
            type: dataTypes.INTEGER.UNSIGNED,
        },
        textoComentario: {
            type: dataTypes.STRING,
        }
    };
    let config = {
        tableName: "comentarios",
        timestamps: true,
    }

    let Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function(models) {

        Comentario.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "usuarioId",
        });

        Comentario.belongsTo(models.Producto, {
            as:"productos",
            foreignKey: "productoId",
        })
       


    }

    return Comentario;
}