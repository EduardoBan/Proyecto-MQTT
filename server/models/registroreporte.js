const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('registroreporte', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EmpresaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'empresa',
        key: 'ID'
      }
    },
    PtoMedicionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'puntodemedicion',
        key: 'Id'
      }
    },
    UsuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'ID'
      }
    },
    TipodeEnvio: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    FechadeEnvio: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    Comentario: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'registroreporte',
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
        name: "fk_registroreporte_empresa1_idx",
        using: "BTREE",
        fields: [
          { name: "EmpresaId" },
        ]
      },
      {
        name: "fk_registroreporte_puntodemedicion1_idx",
        using: "BTREE",
        fields: [
          { name: "PtoMedicionId" },
        ]
      },
      {
        name: "fk_registroreporte_usuarios1_idx",
        using: "BTREE",
        fields: [
          { name: "UsuarioId" },
        ]
      },
    ]
  });
};
