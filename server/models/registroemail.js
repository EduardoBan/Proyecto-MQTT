const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('registroemail', {
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
    Fecha: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    Comentario: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'registroemail',
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
        name: "fk_registroemail_usuarios1_idx",
        using: "BTREE",
        fields: [
          { name: "UsuarioID" },
        ]
      },
    ]
  });
};
