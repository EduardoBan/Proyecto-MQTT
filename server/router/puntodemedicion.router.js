import {Router} from'express';

 const router = Router(); 

import{
    getPuntodemedicion,
    createPuntodemedicion,
    getPuntodemedicionAll,
    getPuntodemedicionName
} from'../controller/puntodemedicion.controller.js';

import { } from '../models/puntodemedicion.models.js';

router.get("/puntodemedicion", getPuntodemedicionAll);
router.post("/puntodemedicion", createPuntodemedicion);
router.get("/puntodemedicion/:id", getPuntodemedicion);
router.get("/puntodemedicion/nombre/:name", getPuntodemedicionName);
export default router;





