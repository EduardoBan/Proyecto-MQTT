import { registro } from "../models/registro.models.js";
import { DECIMAL, INTEGER, Op, ValidationErrorItem } from "sequelize";
import { puertoes } from "../models/puertoes.models.js";
import puntoMedicionName from "../database/parse/ptoMedicionName.parse.js";
import dayjs from "dayjs";
import { appendFileSync } from 'node:fs';
dayjs().format();
//-------------------- Console to Log file ------------------------
//const { appendFileSync } = require('fs');
const origConsole = globalThis.console;
const timestamp = new Date().toISOString();
const console = {
  log: (...args) => {
    appendFileSync('./logresults.txt', `${timestamp}` + ' : ' + args.join('\n') + '\n');
    return origConsole.log.apply(origConsole, args);
  }
}
//------------ Crear nuevos registros desde un JSON ------------------------

//------------- Listado del Puerto por Etiqueta A1, A2, A3 ------------------
async function getPuertoEsEtiqueta(etiqueta, puntoID) {
  try {
    const respuesta = await puertoes.findAll({
      where: {
        Etiqueta: etiqueta,
        puntodemedicion_Id: puntoID,
      },
      //  attributes: { exclude: ['roleID'], include: ['LoweredRoleName'] },
    });
    if (!!respuesta && Object.keys(respuesta).length) {
      return JSON.stringify(respuesta);
    } else {
      return JSON.stringify("Error");
    }
  } catch (error) {
    return error.message;
  }
}

//-------------------------Grabo registros en ls DB--------------------------------
async function grabarRegistroBD(valorGrabar) {
  try {
    const { Valor, FechaHoraCreacion, FechaHoraRegistro, PuertoES_Id } =
      valorGrabar;
    const newRegistro = await registro.create({
      Valor,
      FechaHoraCreacion,
      FechaHoraRegistro,
      PuertoES_Id,
    });
    console.log("grabarRegistroBD Nuevo registro guardado:" + JSON.stringify(newRegistro));
    return "ok";
  } catch (error) {
    return error.message;
  }
}

//------------------------- Crear Registro -----------------------------
export const createRegistros = async (req, res) => {
  const registro = {
    Valor: DECIMAL,
    FechaHoraCreacion: INTEGER,
    FechaHoraRegistro: INTEGER,
    PuertoES_Id: INTEGER,
  };

  try {
    const datosJson = await req.body;
    console.log("Dato Body Json BBB");
    console.log(datosJson);
    console.log("Nombre Pto medicion: " + datosJson.TemaNombre);
    const dataPtoMedicion = await puntoMedicionName(datosJson.TemaNombre); // obtengo el Id del pto de medicion con el nombre
    const fechaActualRemoto = datosJson.f_actual;
    let fechaHoRegistro = dayjs().unix();
    if (!!dataPtoMedicion && Object.keys(dataPtoMedicion).length) {
      // si existe el punto de medicion
      //-------------------------- busco en cada Data Register daReg los valores --------------------
      for (let x = 0; x < Object.keys(datosJson.Data).length; x++) {
        fechaHoRegistro = Object.keys(datosJson.Data)[x]; // obtengo el string con la fecha de registro
        var nuevosDatos = JSON.stringify(datosJson.Data); //Separo el arreglo Datos

        let nuevosJson = JSON.parse(nuevosDatos);
        let fechaDatos = Object.keys(nuevosJson); // obtengo la fecha de cada array de datos
        let datosLog = Object.values(nuevosJson); // obtengo los array de datos guardado (logeados)
        let repetir = datosLog[x].length; // obtengo la long de datos guardados (logeados)
        for (let index = 0; index < repetir; index++) {
          // Recorro el dato guardado
          const PtoMedicionId = dataPtoMedicion[0].Id;
          const etiquetaEs = "A" + datosLog[x][index][0];
          const valorEs = datosLog[x][index][1];

          let puertoEsId = JSON.parse(
            // Obtengo el Id del puerto ES que me llego en el JSON
            await getPuertoEsEtiqueta(
              // Filtro la tabla por Etiqueta e Id del Punto de MEdicion
              //SELECT * FROM demo.puertoes WHERE (puntodemedicion_Id=2 AND Etiqueta="A0");
              etiquetaEs,
              PtoMedicionId
            )
          );
          console.log(" Etiqueta:" +
            etiquetaEs +
            " -> puerto E/S Id Nº: "
            + puertoEsId
          );

          try {
            if (puertoEsId !== "Error") {
              // si existe el puerto ES grabo los valores
              registro.FechaHoraRegistro = fechaHoRegistro;
              registro.FechaHoraCreacion = dayjs().unix();
              registro.PuertoES_Id = puertoEsId[0].Id;
              registro.Valor = +valorEs;

              let estGrabar = await grabarRegistroBD(registro); // registro los valores en la BD

              if (estGrabar === "ok") {
                console.log("Dato grabado correctamente en la BD ");

                console.log(registro);
                Object.keys(registro).forEach((key) => {
                  // Limpio el objeto registro, antes de regresar
                  delete registro[key];
                });
              } else {
                res.status(500).json({ message: "Error al grabar dato" });
              }
            } else {
              console.log(
                "Error, la etiqueta:" +
                etiquetaEs +
                ", NO esta asociada a un puerto\n"                
              );
            }
          } catch (error) {
            console.log("Error al grabar datos:" + error);
            res.status(502).json({ message: "Error al grabar dato" });
          }
          //-----------------------------------------------------------------------
        }
      }
    }
    return res.status(200).json({ message: "Dato grabado" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
