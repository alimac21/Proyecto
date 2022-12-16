import { Router } from "express";
import { createAnalisis, deleteAnalisis, getAnalisis, getAnalisiss, UpdateAnalisis } from "../controllers/analisis.controllers"

const router = Router();

router.post("/analisis", createAnalisis);

router.get("/analisis", getAnalisiss);

router.put('/analisis/:id', UpdateAnalisis);

router.delete('/analisis/:id', deleteAnalisis);

router.get ('/analisis/:id', getAnalisis);

export default router;