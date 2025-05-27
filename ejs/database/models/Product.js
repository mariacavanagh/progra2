module.exports = function(sequelize, dataTypes){
    let alias = "Producto";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED

        },
        usuarioId: {
            type: dataTypes.INTEGER.UNSIGNED
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

    Producto.associate = function(models) {

        Producto.belongsTo(models.Usuario, {
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