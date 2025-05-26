module.exports = function(sequelize, dataTypes){
    let alias = "Comentarios";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNISIGNED

        },
        post_id: {
            type: dataTypes.INTEGER.UNISIGNED
        },
        usuario_id:{
            type: dataTypes.INTEGER.UNISIGNED,
            allowNull: false
        },
        comentarios: {
            type: dataTypes.INTEGER.UNISIGNED,
            allowNull: false
        },
    };
    let config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: true
    }

    let Comentario = sequelize.define(alias, cols, config);

    Comentario.assiociate = function(models) {

        Comentario.belongsTo(models.User, {
            as: "usuarios",
            foreignKey: "usuarioId",
        });

        Comentario.belongsTo(models.Product, {
            as:"productos",
            foreignKey: "productoId",
        })
       


    }

    return Comentario;
}