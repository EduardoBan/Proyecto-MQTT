import { DataTypes } from "sequelize";
import sequelize from "../database/baseDatos.js";

export const puntodemedicion = sequelize.define(
  "puntodemedicion",
  {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true,
    },
    Nombre: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Contrasena: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    Usuario: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    FechaBaja: {
      type: DataTypes.DATE(6),
      allowNull: true,
    },
    Latitud: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    Longitud: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    Pais: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Provincia: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Localidad: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    NombreControlador: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Observaciones: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Proveedor: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    TiempoDeMuestra: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1440,
    },
    TipoControlador: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    TipoImag: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Activo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1,
    },
    Imagen_Al_Menor: {
      type: DataTypes.STRING(0),
      allowNull: true,
    },
    Imagen_Al_Mayor: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "0",
    },
    Imagen_Fondo_Graf: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Imagen_Gral: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Numero_Asignado: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      defaultValue: "1234567890",
    },
    Identidad_Equipo: {
      type: DataTypes.CHAR(15),
      allowNull: true,
      defaultValue: "123456789012345",
    },
    Llave_Seg: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Mimico: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    contrato_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "contrato",
        key: "Id",
      },
    },
    contrato_empresa_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "contrato",
        key: "empresa_ID",
      },
    },
  },
  {
    tableName: "puntodemedicion",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id" },
          { name: "contrato_Id" },
          { name: "contrato_empresa_ID" },
        ],
      },
      {
        name: "fk_puntodemedicion_contrato1_idx",
        using: "BTREE",
        fields: [{ name: "contrato_Id" }, { name: "contrato_empresa_ID" }],
      },
    ],
  }
);
