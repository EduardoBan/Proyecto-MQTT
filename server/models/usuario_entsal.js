const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario_entsal', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UsuarioID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'ID'
      }
    },
    AvisoAlarma: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'usuario_entsal',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id" },
        ]
      },
      {
        name: "fk_usuario_entsal_usuarios1_idx",
        using: "BTREE",
        fields: [
          { name: "UsuarioID" },
        ]
      },
    ]
  });
};
