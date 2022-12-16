import { Router } from "express";
import { createCoprouro, deleteCoprouro, getCoprouro, getCoprouros, UpdateCoprouro } from "../controllers/coprouro.controllers"

const router = Router();

router.post("/coprouro", createCoprouro);

router.get("/coprouro", getCoprouros);

router.put('/coprouro/:id', UpdateCoprouro);

router.delete('/coprouro/:id', deleteCoprouro);

router.get ('/coprouro/:id', getCoprouro);

export default router;