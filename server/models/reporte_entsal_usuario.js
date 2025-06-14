const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reporte_entsal_usuario', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UsuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'ID'
      }
    },
    EntradaSalidaId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EnvioCada: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "S",
      comment: "Envio de datos cada Diario, Semanal, Mensual"
    },
    DiaDeEnvio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "Dia en el que se envia los datos Lunes=1, Martes, MIercoles,Jueves, Viernes, Sabado Domingo=7"
    }
  }, {
    sequelize,
    tableName: 'reporte_entsal_usuario',
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
        name: "fk_reporte_entsal_usuario_usuarios1_idx",
        using: "BTREE",
        fields: [
          { name: "UsuarioId" },
        ]
      },
    ]
  });
};
