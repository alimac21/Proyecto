import { Router } from "express";
import { createEnfermera, deleteEnfermera, getEnfermera, getEnfermeras, UpdateEnfermera } from "../controllers/enfermera.controllers"

const router = Router();

router.post("/enfermera", createEnfermera);

router.get("/enfermera", getEnfermeras);

router.put('/enfermera/:id', UpdateEnfermera);

router.delete('/enfermera/:id', deleteEnfermera);

router.get ('/enfermera/:id', getEnfermera);

export default router;