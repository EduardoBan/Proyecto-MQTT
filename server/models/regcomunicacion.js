const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('regcomunicacion', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PuntoMedicionID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'puntodemedicion',
        key: 'Id'
      }
    },
    Fecha: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    IP: {
      type: DataTypes.CHAR(22),
      allowNull: true
    },
    Mensage: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'regcomunicacion',
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
        name: "fk_regcomunicacion_puntodemedicion1_idx",
        using: "BTREE",
        fields: [
          { name: "PuntoMedicionID" },
        ]
      },
    ]
  });
};
