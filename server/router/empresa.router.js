import {Router} from'express';

 const router = Router(); 

import{
    getEmpresas,
    createEmpresa
} from'../controller/empresa.controller.js';
import { empresa } from '../models/empresa.models.js';


// const empresa=Empresa();

router.get("/empresa", getEmpresas);
router.post("/empresa", createEmpresa);
// router.get("/empresa/:id", getEmpresa);
// router.put("/empresa/:id", updateEmpresas);
// router.delete("/empresa/:id", deleteEmpresas);


export default router;





