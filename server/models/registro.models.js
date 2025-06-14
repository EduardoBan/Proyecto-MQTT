import { DataTypes } from "sequelize";
import sequelize from "../database/baseDatos.js";

export const registro = sequelize.define(
  "registro",
  {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Valor: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false,
    },
    FechaHoraCreacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    FechaHoraRegistro: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    PuertoES_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "puertoes",
        key: "Id",
      },
    },
  },
  {
    timestamps: false, // para que no cree y pida los campos createAt y updateAt
    freezeTableName: true, // para que no pluralize la tabla, mantiene el nombre con esta
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "Id" }, { name: "PuertoES_Id" }],
      },
      {
        name: "fk_registro_PuertoES1_idx",
        using: "BTREE",
        fields: [{ name: "PuertoES_Id" }],
      },
    ],
  }
);
