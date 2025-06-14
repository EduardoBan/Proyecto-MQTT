const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UsuarioSesionNombre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Contrasena: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Nombre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Direccion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Localidad: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Provincia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Pais: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Telefono: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Observaciones: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FechaBaja: {
      type: DataTypes.DATE,
      allowNull: true
    },
    contrato_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'contrato',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'usuarios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
          { name: "contrato_Id" },
        ]
      },
      {
        name: "fk_usuarios_contrato1_idx",
        using: "BTREE",
        fields: [
          { name: "contrato_Id" },
        ]
      },
    ]
  });
};
