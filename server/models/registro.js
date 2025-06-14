import { DataTypes } from "sequelize";
import sequelize from "../database/baseDatos.js";

export const registro = sequelize.define(
"registro", 
{
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Valor: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    },
    FechaHoraCreacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FechaHoraRegistro: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    PuertoES_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'puertoes',
        key: 'Id'
      }
    },
    PuertoES_puntodemedicion_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'puertoes',
        key: 'puntodemedicion_Id'
      }
    },
    PuertoES_puntodemedicion_contrato_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'puertoes',
        key: 'puntodemedicion_contrato_Id'
      }
    },
    PuertoES_puntodemedicion_contrato_empresa_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'puertoes',
        key: 'puntodemedicion_contrato_empresa_ID'
      }
    }
  }, {
    sequelize,
    tableName: 'registro',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id" },
          { name: "PuertoES_Id" },
          { name: "PuertoES_puntodemedicion_Id" },
          { name: "PuertoES_puntodemedicion_contrato_Id" },
          { name: "PuertoES_puntodemedicion_contrato_empresa_ID" },
        ]
      },
      {
        name: "fk_registro_PuertoES1_idx",
        using: "BTREE",
        fields: [
          { name: "PuertoES_Id" },
          { name: "PuertoES_puntodemedicion_Id" },
          { name: "PuertoES_puntodemedicion_contrato_Id" },
          { name: "PuertoES_puntodemedicion_contrato_empresa_ID" },
        ]
      },
    ]
  });
};
