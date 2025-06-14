import { DataTypes } from "sequelize";
import sequelize from "../database/baseDatos.js";

export const vistas = sequelize.define(
  "vistas",
  {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    x: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    y: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    w: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    h: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    MimicoCodigo: {
      type: DataTypes.CHAR(10),
      allowNull: false,
    },
    Comentario: {
      type: DataTypes.CHAR(30),
      allowNull: true,
    },
    FechaAct: {
      type: DataTypes.DATE(6),
      allowNull: true,
    },
    PuertoES_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    minW: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2,
    },
    minH: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 4,
    },
    Static: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
    },
    Moved: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
    },
    Color_A: {
      type: DataTypes.CHAR(6),
      allowNull: true,
      defaultValue: 'ff0000',
    },
    Color_B: {
      type: DataTypes.CHAR(6),
      allowNull: true,
      defaultValue: '008000',
    },
    Color_C: {
      type: DataTypes.CHAR(6),
      allowNull: true,
      defaultValue: '0000FF',
    },
    Cambio_A: {
      type: DataTypes.CHAR(12),
      allowNull: true,
      defaultValue: '100',
    },
    Cambio_B: {
      type: DataTypes.CHAR(12),
      allowNull: true,
      defaultValue: '200',
    },
    
    Muestra_Promedio: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
    },
    Muestra_Marcadores: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
    },
    Muestra_Titulo: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    tableName: "vistas",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "Id" }],
      },
    ],
  }
);
