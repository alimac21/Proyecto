import { Router } from "express";
import { createParroquia, deleteParroquia, getParroquia, updateParroquia } from "../controllers/parroquia.controllers"

const router = Router();

router.post("/parroquia", createParroquia);

router.get("/parroquia", getParroquia);

router.put('/parroquia/:id', updateParroquia);

router.delete('/parroquia/:id', deleteParroquia);

export default router;