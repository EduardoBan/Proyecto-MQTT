import { puertoes } from "../models/puertoes.models.js";
import { Op } from "sequelize";

//------------- Listado de todas las Puertoes ------------------
export const getPuertoesAll = async (req, res) => {
  try {
    const datos = await puertoes.findAll();
    res.json(datos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
//------------- Listado de uno solo de las Puertoes ------------------
export const getPuertoes = async (req, res) => {
  try {
    const { id } = req.params;
    const datos = await puertoes.findByPk(id);
    res.json(datos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
//------------- Listado de uno solo de las Puertos por Id el punto de Medicion ------------------
export const getPuertoEsPtoId = async (req, res) => {
  try {
    const { id } = req.params;
    const respuesta = await puertoes.findAll({
      where: {
        puntodemedicion_Id: id,
      },
    });
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//------------- Listado del Puerto por Etiqueta A1, A2, A3 ------------------
export const getPuertoEsEtiqueta = async (req, res) => {
  try {
    const { etiqueta } = req.params;
    const respuesta = await puertoes.findAll({
      where: {
        Etiqueta: etiqueta,
      },
    });
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


//------------ Crear un nuevo Puertoes ------------------------

export const createPuertoes = async (req, res) => {
  try {
    // const { Id, Valor, FechaHoraCreacion, FechaHoraRegistro, PuertoES_Id } =
    //   req.body;
    // const newPuertoes = await puertoes.create({
    //   Valor,
    //   FechaHoraCreacion,
    //   FechaHoraRegistro,
    //   PuertoES_Id,
    // });
    // console.log("Nuevo Puerto E/S guardado: " + newPuertoes);
    // res.send("CREATE DB de Registro de datos");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//------------- Borro un Puertoes ------------------
export const deletePuertoes = async (req, res) => {
  try {
    const { id } = req.params;
    await puertoes.destroy({
      where: {
        id,
      },
    });
    return res.status(200).json({ message: "Borrado de la BD correctamente" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//-------------------------- Actualizo un Puertoes---------------------
export const updatePuertoes = async (req, res) => {
  try {
    // const { id } = req.params;
    // const { Valor, FechaHoraCreacion, FechaHoraRegistro, PuertoES_Id } =
    //   req.body;
    // const Puertoes = await PuertoES.findByPk(id);
    // (Puertoes.Valor = Valor),
    //   (Puertoes.FechaHoraCreacion = FechaHoraCreacion),
    //   (Puertoes.FechaHoraRegistro = FechaHoraRegistro),
    //   (Puertoes.PuertoES_Id = PuertoES_Id),
    //   await Puertoes.save();
    // res.json(Puertoes);
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
    // const PuertoES = req.params.PuertoES_Id;
    // const queryFecha = req.query.fecha;  // cargo el valor que llega en la URL, el ?
    // const { Valor, FechaHoraCreacion, FechaHoraRegistro, PuertoES_Id } =
    //   req.body;
    // if ((queryFecha != "{}")&&(queryFecha != undefined)) {
    //   let arrayFecha = queryFecha.split(",");
    //   const fecha_A = arrayFecha[0];
    //   const fecha_B = arrayFecha[1];
    //   const registros = await registro.findAll({
    //     where: {
    //       PuertoES_Id: PuertoES,
    //       FechaHoraCreacion: {
    //         [Op.and]: {
    //           [Op.gte]: fecha_A,
    //           [Op.lte]: fecha_B,
    //         },
    //       },
    //     },
    //   });
    //   res.json(registros);
    // } else {
    //   const registros = await registro.findAll({
    //     where: {
    //       PuertoES_Id: PuertoES,
    //     },
    //   });
    //   res.json(registros);
    // }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//-----------------------------------------------------------------------------------

// export const getPtoES_Registro = async (req, res) => {
//   try {
//     const PuertoES = req.params.PuertoES_Id;
//     const { Valor, FechaHoraCreacion, FechaHoraRegistro, PuertoES_Id } =
//       req.body;
//     const registros = await registro.findAll({
//       where: {
//         PuertoES_Id: PuertoES,
//       },
//     });
//     res.json(registros);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };
