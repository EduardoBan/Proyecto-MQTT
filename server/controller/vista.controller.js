import { vistas } from "../models/vistas.models.js";
import { Op } from "sequelize";

//------------- Listado de todas las Vista ------------------
export const getVistas = async (req, res) => {
  try {
    const datos = await vistas.findAll();
    res.json(datos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
//------------- Listado de uno solo de las Vista ------------------
export const getVista = async (req, res) => {
  try {
    const { id } = req.params;
    const datos = await vistas.findByPk(id);
    res.json(datos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//------------- Borro un Vista ------------------
export const deleteVista = async (req, res) => {
  try {
    const { id } = req.params;
    await vistas.destroy({
      where: {
        id,
      },
    });
    return res.status(200).json({ message: "Borrado de la BD correctamente" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//------------ Crear un nuevo Vista ------------------------

export const createVista = async (req, res) => {
  try {
    // const { Id, Valor, FechaHoraCreacion, FechaHoraRegistro, Vista_Id } =
    //   req.body;
    // const newVista = await Vista.create({
    //   Valor,
    //   FechaHoraCreacion,
    //   FechaHoraRegistro,
    //   Vista_Id,
    // });
    // console.log("Nuevo Puerto E/S guardado: " + newVista);
    // res.send("CREATE DB de Registro de datos");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


//-------------------------- Actualizo un Vista---------------------
export const updateVista = async (req, res) => {
  try {
    // const { id } = req.params;
    // const { Valor, FechaHoraCreacion, FechaHoraRegistro, Vista_Id } =
    //   req.body;
    // const Vista = await Vista.findByPk(id);
    // (Vista.Valor = Valor),
    //   (Vista.FechaHoraCreacion = FechaHoraCreacion),
    //   (Vista.FechaHoraRegistro = FechaHoraRegistro),
    //   (Vista.Vista_Id = Vista_Id),
    //   await Vista.save();
    // res.json(Vista);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
//------------------------- Busco por Vista -----------------------------------
//  localhost:5000/registros/Vista/2
//-------------------- Busco por Vista_Id y Fecha Creacion----------------------
//localhost:5000/registros/Vista/2?fecha=1695224740,1695224746
export const getPtoES_Registro = async (req, res) => {
  try {
    // const Vista = req.params.Vista_Id;
    // const queryFecha = req.query.fecha;  // cargo el valor que llega en la URL, el ?
    // const { Valor, FechaHoraCreacion, FechaHoraRegistro, Vista_Id } =
    //   req.body;
    // if ((queryFecha != "{}")&&(queryFecha != undefined)) {
    //   let arrayFecha = queryFecha.split(",");
    //   const fecha_A = arrayFecha[0];
    //   const fecha_B = arrayFecha[1];
    //   const registros = await registro.findAll({
    //     where: {
    //       Vista_Id: Vista,
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
    //       Vista_Id: Vista,
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
//     const Vista = req.params.Vista_Id;
//     const { Valor, FechaHoraCreacion, FechaHoraRegistro, Vista_Id } =
//       req.body;
//     const registros = await registro.findAll({
//       where: {
//         Vista_Id: Vista,
//       },
//     });
//     res.json(registros);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };


//------------- Listado de uno solo de las Puertos por Id el punto de Medicion ------------------
// export const getVistaPuertoId = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const respuesta = await Vista.findAll({
//       where: {
//         puntodemedicion_Id: id,
//       },
//     });
//     res.json(respuesta);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

//------------- Listado del Puerto por Etiqueta A1, A2, A3 ------------------
// export const getVistaEtiqueta = async (req, res) => {
//   try {
//     const { etiqueta } = req.params;
//     const respuesta = await Vista.findAll({
//       where: {
//         Etiqueta: etiqueta,
//       },
//     });
//     res.json(respuesta);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

