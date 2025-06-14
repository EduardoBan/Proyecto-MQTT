const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('formula', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NombreFormula: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    RegistroID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'registro',
        key: 'Id'
      }
    },
    Ecuacion: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    OperadorA: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    OperadorB: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OperadorC: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ConstanteA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ConstanteB: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ConstanteC: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Descripcion: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    Fecha_Crea: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    Activa: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    },
    TipoEc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'formula',
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
        name: "fk_formula_registro1_idx",
        using: "BTREE",
        fields: [
          { name: "RegistroID" },
        ]
      },
    ]
  });
};
