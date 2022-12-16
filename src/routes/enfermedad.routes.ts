import { Router } from "express";
import { createEnfermedad, deleteEnfermedad, getEnfermedad, getEnfermedads, UpdateEnfermedad } from "../controllers/enfermedad.controllers"

const router = Router();

router.post("/enfermedad", createEnfermedad);

router.get("/enfermedad", getEnfermedads);

router.put('/enfermedad/:id', UpdateEnfermedad);

router.delete('/enfermedad/:id', deleteEnfermedad);

router.get ('/enfermedad/:id', getEnfermedad);

export default router;