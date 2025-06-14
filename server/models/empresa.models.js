import { DataTypes } from "sequelize";
import sequelize from "../database/baseDatos.js";

export const empresa = sequelize.define("empresa",
  {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true,
    },
    Nombre: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Direccion: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    CodigoPostal: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Localidad: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Provincia: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Observaciones: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Email: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    RazonSocial: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Latitud: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Longitud: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Telefono: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    FechaBaja: {
      type: DataTypes.DATE(6),
      allowNull: true,
    },
    ServEmailSaliente: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    PuertoEmailSaliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ServEmailEntrante: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    PuertoEmailEntrante: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    EmailAdmin: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    CtaEmailServicio: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    PswEmailServicio: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
  },
  {
    timestamps: false,  // para que no cree y pida los campos createAt y updateAt
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "ID" }],
      },
    ],
  }
);
