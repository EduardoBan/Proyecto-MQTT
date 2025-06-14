import {Router} from'express';

 const router = Router(); 

import{
    getPuertoesAll,
    createPuertoes,
    getPuertoes,
    deletePuertoes,
    updatePuertoes,
    getPuertoEsPtoId,

} from'../controller/puertoes.controller.js';

import {  } from '../models/puertoes.models.js';

router.get("/puertoes", getPuertoesAll);
router.get("/puertoEsPtoId/:id", getPuertoEsPtoId);
router.post("/puertoes", createPuertoes);
router.get("/puertoes/:id", getPuertoes);
router.put("/puertoes/:id", updatePuertoes);
router.delete("/puertoes/:id", deletePuertoes);


export default router;
