import { Router } from "express";
import { createTimg, deleteTimg, getTimg, getTimgs, UpdateTimg } from "../controllers/timg.controllers"

const router = Router();

router.post("/timg", createTimg);

router.get("/timg", getTimgs);

router.put('/timg/:id', UpdateTimg);

router.delete('/timg/:id', deleteTimg);

router.get ('/timg/:id', getTimg);

export default router;