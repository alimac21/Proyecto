import { Router } from "express";
import { createPhistoria, deletePhistoria, getPhistoria, getPhistorias, UpdatePhistoria } from "../controllers/phistoria.controllers"

const router = Router();

router.post("/phistoria", createPhistoria);

router.get("/phistoria", getPhistorias);

router.put('/phistoria/:id', UpdatePhistoria);

router.delete('/phistoria/:id', deletePhistoria);

router.get ('/phistoria/:id', getPhistoria);

export default router;