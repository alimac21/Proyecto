import { Router } from "express";
import { createMedico, deleteMedico, getMedico, getMedicos, UpdateMedico } from "../controllers/medico.controllers"

const router = Router();

router.post("/medico", createMedico);

router.get("/medico", getMedicos);

router.put('/medico/:id', UpdateMedico);

router.delete('/medico/:id', deleteMedico);

router.get ('/medico/:id', getMedico);

export default router;