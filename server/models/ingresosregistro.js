const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ingresosregistro', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true,
    },
    IDUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'ID'
      }
    },
    Fecha_ing: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    Paginas: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IP: {
      type: DataTypes.STRING(16),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ingresosregistro',
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
        name: "fk_ingresosregistro_usuarios1_idx",
        using: "BTREE",
        fields: [
          { name: "IDUsuario" },
        ]
      },
    ]
  });
};
