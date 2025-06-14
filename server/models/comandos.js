const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comandos', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PuntoMedicionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'puntodemedicion',
        key: 'Id'
      }
    },
    Str_Comando: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    UsuarioID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'ID'
      }
    },
    Fecha_creado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Fecha_envio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Comentario: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'comandos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "fk_comandos_puntodemedicion1_idx",
        using: "BTREE",
        fields: [
          { name: "PuntoMedicionID" },
        ]
      },
      {
        name: "fk_comandos_usuarios1_idx",
        using: "BTREE",
        fields: [
          { name: "UsuarioID" },
        ]
      },
    ]
  });
};
