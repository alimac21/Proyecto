import { Router } from "express";
import { createImg, deleteImg, getImg, getImgs, UpdateImg } from "../controllers/img.controllers"

const router = Router();

router.post("/img", createImg);

router.get("/img", getImgs);

router.put('/img/:id', UpdateImg);

router.delete('/img/:id', deleteImg);

router.get ('/img/:id', getImg);

export default router;