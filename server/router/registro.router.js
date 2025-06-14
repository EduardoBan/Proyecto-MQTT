import { Router } from "express";

const router = Router();

import {
  getRegistros,
  getRegistro,
  getUltimoRegistro,
  getUltimosRegistros,
  updateRegistro,
  deleteRegistro,
  createRegistro,
  getPtoES_Registro,
} from "../controller/registro.controller.js";

import { createRegistros } from "../controller/registrosJSON.controller.js";

import {} from "../models/registro.models.js";

router.get("/registros", getRegistros);
router.post("/registro", createRegistro);
router.post("/registros", createRegistros);
router.get("/registros/:id", getRegistro);
router.get("/ultimoregistro/:id", getUltimoRegistro);    //recupera el ultimo registro cargado por el numero de puerto
router.get("/ultimosregistros/:id", getUltimosRegistros);    //recupera los ultimos registros cargados por el numero de puerto (se toman los 72 o 3 dias para atras (72hs))
router.put("/registros/:id", updateRegistro);
router.delete("/registros/:id", deleteRegistro);
// -----------Verbos para obtener datos filtrados -----------------
router.get("/registros/PuertoES/:PuertoES_Id", getPtoES_Registro); // podemos filtrar ademas por fecha
// ?fecha=1234567899,1234567890 ---> fecha=fechaMayor,fechamenor

export default router;
