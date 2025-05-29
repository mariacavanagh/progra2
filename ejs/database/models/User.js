module.exports = function(sequelize, dataTypes){
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED

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
            type: dataTypes.INTEGER.UNSIGNED
        },
        fotoPerfil: {
            type: dataTypes.STRING
        },

    };
    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: false,
    }

    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models) {

        Usuario.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "usuarioId",
        });

        Usuario.hasMany(models.Comentario, {
            as:"comentarios",
            foreignKey: "usuarioId",
        })

    }
       
        return Usuario;
}
