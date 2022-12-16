import { Router } from "express";
import { createQuimsang, deleteQuimsang, getQuimsang, getQuimsangs, UpdateQuimsang } from "../controllers/quimsang.controllers"

const router = Router();

router.post("/quimsang", createQuimsang);

router.get("/quimsang", getQuimsangs);

router.put('/quimsang/:id', UpdateQuimsang);

router.delete('/quimsang/:id', deleteQuimsang);

router.get ('/quimsang/:id', getQuimsang);

export default router;