import { Router } from "express";
import { createLocalidad, deleteLocalidad, getLocalidad, updateLocalidad } from "../controllers/localidad.controllers"

const router = Router();

router.post("/localidad", createLocalidad);

router.get("/localidad", getLocalidad);

router.put('/localidad/:id', updateLocalidad);

router.delete('/localidad/:id', deleteLocalidad);

export default router;