import { Router } from "express";

const router = Router();

import { createRegistros } from "../controller/registrosJSON.controller.js";

import {} from "../models/registro.models.js";

router.post("/registros", createRegistros);
// -----------Verbos para obtener datos filtrados -----------------
//router.get("/registros/PuertoES/:PuertoES_Id", getPtoES_Registro);  // podemos filtrar ademas por fecha
// ?fecha=1234567899,1234567890 ---> fecha=fechaMayor,fechamenor

export default router;
