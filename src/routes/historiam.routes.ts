import { Router } from "express";
import { createHistoriam, deleteHistoriam, getHistoriam, getHistoriams, UpdateHistoriam } from "../controllers/historiam.controllers"

const router = Router();

router.post("/historiam", createHistoriam);

router.get("/historiam", getHistoriams);

router.put('/historiam/:id', UpdateHistoriam);

router.delete('/historiam/:id', deleteHistoriam);

router.get ('/historiam/:id', getHistoriam);

export default router;