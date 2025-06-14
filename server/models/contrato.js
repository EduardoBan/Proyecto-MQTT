const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contrato', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true,
    },
    Nom_Contrato: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    FechaAlta: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    FechaBaja: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    Comentarios: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empresa_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'empresa',
        key: 'ID'
      }
    }
  }, {
    sequelize,
    tableName: 'contrato',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id" },
          { name: "empresa_ID" },
        ]
      },
      {
        name: "fk_contrato_empresa_idx",
        using: "BTREE",
        fields: [
          { name: "empresa_ID" },
        ]
      },
    ]
  });
};
