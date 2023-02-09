import { Router } from "express";
import { createEstado, deleteEstado, getEstado, updateEstado } from "../controllers/estado.controllers"

const router = Router();

router.post("/estado", createEstado);

router.get("/estado", getEstado);

router.put('/estado/:id', updateEstado);

router.delete('/estado/:id', deleteEstado);

export default router;