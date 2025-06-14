const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('string_comando', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    'PuntoDeMediciónID': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Etiqueta_Cmd: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    String_Cmd: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UsuarioID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'ID'
      }
    },
    Fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Baja: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    Comentario: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'string_comando',
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
        name: "fk_string_comando_usuarios1_idx",
        using: "BTREE",
        fields: [
          { name: "UsuarioID" },
        ]
      },
    ]
  });
};
