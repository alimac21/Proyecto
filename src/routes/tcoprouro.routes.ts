import { Router } from "express";
import { createTcoprouro, deleteTcoprouro, getTcoprouro, getTcoprouros, UpdateTcoprouro } from "../controllers/tcoprouro.controllers"

const router = Router();

router.post("/tcoprouro", createTcoprouro);

router.get("/tcoprouro", getTcoprouros);

router.put('/tcoprouro/:id', UpdateTcoprouro);

router.delete('/tcoprouro/:id', deleteTcoprouro);

router.get ('/tcoprouro/:id', getTcoprouro);

export default router;