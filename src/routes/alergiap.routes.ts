import { Router } from "express";
import { createAlergiap, deleteAlergiap, getAlergiap, getAlergiaps, UpdateAlergiap } from "../controllers/alergiap.controllers.ts";

const router = Router();

router.post("/alergiap", createAlergiap);

router.get("/alergiap", getAlergiaps);

router.put('/alergiap/:id', UpdateAlergiap);

router.delete('/alergiap/:id', deleteAlergiap);

router.get ('/alergiap/:id', getAlergiap);

export default router;