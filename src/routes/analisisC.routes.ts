import { Router } from "express";
import { createAnalisisC, deleteAnalisisC, getAnalisisC, getAnalisisCs, UpdateAnalisisC } from "../controllers/analisisC.controllers"

const router = Router();

router.post("/analisisC", createAnalisisC);

router.get("/analisisC", getAnalisisCs);

router.put('/analisisC/:id', UpdateAnalisisC);

router.delete('/analisisC/:id', deleteAnalisisC);

router.get ('/analisisC/:id', getAnalisisC);

export default router;