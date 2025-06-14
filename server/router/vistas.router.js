import { Router } from "express";

const router = Router();

import {
  getVistas,
  getVista,
  updateVista,
  deleteVista,
  createVista,
} from "../controller/vista.controller.js";
import {} from "../models/vistas.models.js";

// import { createVistas } from "../controller/VistasJSON.controller.js";

router.get("/vistas", getVistas);
router.get("/vista/:id", getVista);
router.post("/vista", createVista);
router.put("/vista/:id", updateVista);
router.delete("/vista/:id", deleteVista);

export default router;
