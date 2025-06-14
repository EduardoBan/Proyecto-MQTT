const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('registroalarmas', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PtoMedicionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'puntodemedicion',
        key: 'Id'
      }
    },
    PuertoESID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'puertoes',
        key: 'Id'
      }
    },
    FechaHora: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    Estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    Descripcion: {
      type: DataTypes.STRING(151),
      allowNull: true
    },
    Comentario: {
      type: DataTypes.STRING(151),
      allowNull: true
    },
    FechaHoraLimpieza: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    TipoAlarma: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Nivel: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'registroalarmas',
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
        name: "fk_registroalarmas_puntodemedicion1_idx",
        using: "BTREE",
        fields: [
          { name: "PtoMedicionID" },
        ]
      },
      {
        name: "fk_registroalarmas_PuertoES1_idx",
        using: "BTREE",
        fields: [
          { name: "PuertoESID" },
        ]
      },
    ]
  });
};
