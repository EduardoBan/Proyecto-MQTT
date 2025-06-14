import { puntodemedicion } from "../models/puntodemedicion.models.js";
import { Op } from "sequelize";
//------------- Listado de todas las Puntos de medicion ------------------
export const getPuntodemedicionAll = async (req, res) => {
  try {
    const respuesta = await puntodemedicion.findAll();
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
//------------- Listado de uno solo de las Punto de Medicion por Id ------------------
export const getPuntodemedicion = async (req, res) => {
  // res.send ('GET dB de puntodemedicion');

  try {
    const { id } = req.params;
    const respuesta = await puntodemedicion.findByPk(id);
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
//------------- Listado de uno solo de las Punto de Medicion por Nombre ------------------
export const getPuntodemedicionName = async (req, res) => {
  // res.send ('GET dB de puntodemedicion');
  try {
    const { name } = req.params;
    const respuesta = await puntodemedicion.findAll({
      where: {
        Usuario: name,
      },
    });
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// export const getEmpresa=(req,res)=>{
//     res.send ('GET DB de Empresa ID:');
// }

export const createPuntodemedicion = (req, res) => {
  res.send("CREATE DB de puntodemedicion");
};
