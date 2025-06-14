import { DataTypes } from "sequelize";
import sequelize from "../database/baseDatos.js";

export const puertoes = sequelize.define(
  "puertoes",
  {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    Nombre: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Etiqueta: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "A",
    },
    TipoDeVariable: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "Analogica",
    },
    Unidad: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    AlertaActiva: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
    Graficar: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
    },
    BandaMuertaInferior: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      defaultValue: 3.0,
    },
    BandaMuertaSuperior: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      defaultValue: 9.0,
    },
    GeneraAlarmaInferior: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
    GeneraAlarmaSuperior: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
    UmbralInferior: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      defaultValue: 2.0,
    },
    UmbralSuperior: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      defaultValue: 10.0,
    },
    UmbralInferiorTiempoSeg: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 5,
    },
    UmbralSuperiorTiempoSeg: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 5,
    },
    InformaAlarmaSup: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
    },
    InformaAlarmaInf: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
    },
    AutoEscalaEje: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
    },
    EscalaEjeMin: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      defaultValue: 1.0,
    },
    EscalaEjeMax: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
      defaultValue: 10.0,
    },
    TipoDeAlarma: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    InformaFinAlarmaInf: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1,
    },
    InformaFinAlarmaSup: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1,
    },
    puntodemedicion_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "puntodemedicion.models",
        key: "Id",
      },
    },
    puntodemedicion_contrato_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "puntodemedicion",
        key: "contrato_Id",
      },
    },
    puntodemedicion_contrato_empresa_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "puntodemedicion",
        key: "contrato_empresa_ID",
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
        fields: [
          { name: "Id" },
          { name: "puntodemedicion_Id" },
          { name: "puntodemedicion_contrato_Id" },
          { name: "puntodemedicion_contrato_empresa_ID" },
        ],
      },
      {
        name: "fk_PuertoES_puntodemedicion1_idx",
        using: "BTREE",
        fields: [
          { name: "puntodemedicion_Id" },
          { name: "puntodemedicion_contrato_Id" },
          { name: "puntodemedicion_contrato_empresa_ID" },
        ],
      },
    ],
  }
);
