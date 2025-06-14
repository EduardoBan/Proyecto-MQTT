const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupo_rol', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Grupo_Rol: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    usuarios_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuarios',
        key: 'ID'
      }
    },
    usuarios_contrato_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuarios',
        key: 'contrato_Id'
      }
    }
  }, {
    sequelize,
    tableName: 'grupo_rol',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
          { name: "usuarios_ID" },
          { name: "usuarios_contrato_Id" },
        ]
      },
      {
        name: "fk_grupo_rol_usuarios1_idx",
        using: "BTREE",
        fields: [
          { name: "usuarios_ID" },
          { name: "usuarios_contrato_Id" },
        ]
      },
    ]
  });
};
