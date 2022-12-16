import { Router } from "express";
import { createAnalisisQ, deleteAnalisisQ, getAnalisisQ, getAnalisisQs, UpdateAnalisisQ } from "../controllers/analisisQ.controllers"

const router = Router();

router.post("/analisisQ", createAnalisisQ);

router.get("/analisisQ", getAnalisisQs);

router.put('/analisisQ/:id', UpdateAnalisisQ);

router.delete('/analisisQ/:id', deleteAnalisisQ);

router.get ('/analisisQ/:id', getAnalisisQ);

export default router;