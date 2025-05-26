module.exports = function(sequelize, dataTypes){
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNISIGNED

        },
        email: {
            type: dataTypes.STRING(255)
        },
        contrasena:{
            type: dataTypes.STRING(255),
        },
        fechaNacimiento: {
            type: dataTypes.DATE,
        },
        dni: {
            type: dataTypes.INTEGER.UNISIGNED
        },
        fotoPerfil: {
            type: dataTypes.STRING(255)
        },

    };
    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: true
    }

    let Usuario = sequelize.define(alias, cols, config);

    Usuario.assiociate = function(models) {

        Usuario.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "usuarioId",
        });

        Usuario.hasMany(models.Comentario, {
            as:"comentarios",
            foreignKey: "productoId",
        })

    }
       
        return Producto;
}
