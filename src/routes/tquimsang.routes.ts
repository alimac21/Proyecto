import { Router } from "express";
import { createTquimsang, deleteTquimsang, getTquimsang, getTquimsangs, UpdateTquimsang } from "../controllers/tquimsang.controllers"

const router = Router();

router.post("/tquimsang", createTquimsang);

router.get("/tquimsang", getTquimsangs);

router.put('/tquimsang/:id', UpdateTquimsang);

router.delete('/tquimsang/:id', deleteTquimsang);

router.get ('/tquimsang/:id', getTquimsang);

export default router;