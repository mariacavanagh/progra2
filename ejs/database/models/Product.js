module.exports = function(sequelize, dataTypes){
    let alias = "Producto";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNISIGNED

        },
        usuario_id: {
            type: dataTypes.INTEGER.UNISIGNED
        },
        imagen_producto:{
            type: dataTypes.INTEGER.UNISIGNED,
        },
        nombre: {
            type: dataTypes.STRING(255),
        },
        descripcion: {
            type: dataTypes.STRING(255)
        },
    };
    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: true
    }

    let Producto = sequelize.define(alias, cols, config);

    Producto.assiociate = function(models) {

        Producto.belongsTo(models.User, {
            as: "usuarios",
            foreignKey: "usuarioId",
        });

        Producto.hasMany(models.Comentario, {
            as:"comentarios",
            foreignKey: "productoId",
        })

    }
       
        return Producto;
}