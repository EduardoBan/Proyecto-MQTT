import { registro } from "../models/registro.models.js";
import { DECIMAL, INTEGER, Op, ValidationErrorItem } from "sequelize";
import { puertoes } from "../models/puertoes.models.js";
import puntoMedicionName from "../database/parse/ptoMedicionName.parse.js";
import dayjs from "dayjs";

//import dayjs from 'dayjs' // ES 2015
dayjs().format();
//------------- Listado de todas las registro ------------------
export const getRegistros = async (req, res) => {
  try {
    const datos = await registro.findAll();
    res.json(datos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//------------- Listado de el ultimo registro  ------------------
export const getUltimoRegistro = async (req, res) => {
  try {
    const { id } = req.params;
    const datos = await registro.findOne({
      where: {
        PuertoES_Id:id,
      },
      order: [ [ 'FechaHoraCreacion', 'DESC' ]],
      });
    res.json(datos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//------------- Listado de los ultimos registros, la cantidad esta definida en limit:24 ------------------
export const getUltimosRegistros = async (req, res) => {
  try {
    const { id } = req.params;
    const datos = await registro.findAll({
      where: {
        PuertoES_Id:id
      },
      order: [ [ 'FechaHoraCreacion', 'DESC' ]],
      limit:144//limito a 144 registros de datos
      },
     
    );
    res.json(datos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//------------- Listado del Puerto por Etiqueta A1, A2, A3 ------------------
async function getPuertoEsEtiqueta(etiqueta) {
  try {
    const respuesta = await puertoes.findAll({
      where: {
        Etiqueta: etiqueta,
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


//------------- Listado de los valores de un solo de las indice id------------------
export const getRegistro = async (req, res) => {
  try {
    const { id } = req.params;
    const datos = await registro.findByPk(id);
    res.json(datos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//------------ Crear un nuevo registro ------------------------

export const createRegistro = async (req, res) => {
  try {
    const { Valor, FechaHoraCreacion, FechaHoraRegistro, PuertoES_Id } =
      req.body;
    const newRegistro = await registro.create({
      Valor,
      FechaHoraCreacion,
      FechaHoraRegistro,
      PuertoES_Id,
    });
    console.log("Nuevo registro guardado: " + newRegistro);
   res.send("CREATE DB de Registro de datos");
   return;
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//------------ Crear nuevos registros desde un JSON ------------------------



//------------- Borro un regsitro ------------------
export const deleteRegistro = async (req, res) => {
  try {
    const { id } = req.params;
    await registro.destroy({
      where: {
        id,
      },
    });
    return res.status(200).json({ message: "Borrado de la BD correctamente" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//-------------------------- Actualizo un registro---------------------
export const updateRegistro = async (req, res) => {
  try {
    const { id } = req.params;
    const { Valor, FechaHoraCreacion, FechaHoraRegistro, PuertoES_Id } =
      req.body;
    const registros = await registro.findByPk(id);
    (registros.Valor = Valor),
      (registros.FechaHoraCreacion = FechaHoraCreacion),
      (registros.FechaHoraRegistro = FechaHoraRegistro),
      (registros.PuertoES_Id = PuertoES_Id),
      await registros.save();
    res.json(registros);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
//------------------------- Busco por PuertoES -----------------------------------
//  localhost:5000/registros/PuertoES/2
//-------------------- Busco por PuertoES_Id y Fecha Creacion----------------------
//localhost:5000/registros/PuertoES/2?fecha=1695224740,1695224746
export const getPtoES_Registro = async (req, res) => {
  try {
    const PuertoES = req.params.PuertoES_Id;
    const queryFecha = req.query.fecha; // cargo el valor que llega en la URL, lo que llega despues de ?

    const { Valor, FechaHoraCreacion, FechaHoraRegistro, PuertoES_Id } =
      req.body;

    if (queryFecha != "{}" && queryFecha != undefined) {
      let arrayFecha = queryFecha.split(",");
      const fecha_A = arrayFecha[0];
      const fecha_B = arrayFecha[1];

      const registros = await registro.findAll({
        where: {
          PuertoES_Id: PuertoES,
          FechaHoraCreacion: {
            [Op.and]: {
              [Op.gte]: fecha_A,
              [Op.lte]: fecha_B,
            },
          },
        },
      });
      res.json(registros);
    } else {
      const registros = await registro.findAll({
        where: {
          PuertoES_Id: PuertoES,
        },
      });
      res.json(registros);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};