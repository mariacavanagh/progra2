module.exports = function(sequelize, dataTypes){
    let alias = "Producto";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNISIGNED

        },
        usuarioId: {
            type: dataTypes.INTEGER.UNISIGNED
        },
        nombreArchivo:{
            type: dataTypes.STRING(255),
        },
        nombreProducto: {
            type: dataTypes.STRING(255),
        },
        descripcionProducto: {
            type: dataTypes.STRING
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