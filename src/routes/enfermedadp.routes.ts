import { Router } from "express";
import { createEnfermedadp, deleteEnfermedadp, getEnfermedadp, getEnfermedadps, UpdateEnfermedadp } from "../controllers/enfermedadp.controllers"

const router = Router();

router.post("/enfermedadp", createEnfermedadp);

router.get("/enfermedadp", getEnfermedadps);

router.put('/enfermedadp/:id', UpdateEnfermedadp);

router.delete('/enfermedadp/:id', deleteEnfermedadp);

router.get ('/enfermedadp/:id', getEnfermedadp);

export default router;