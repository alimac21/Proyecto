import { Router } from "express";
import { createAnalisisImg, deleteAnalisisImg, getAnalisisImg, getAnalisisImgs, UpdateAnalisisImg } from "../controllers/analisisImg.controllers"

const router = Router();

router.post("/analisisImg", createAnalisisImg);

router.get("/analisisImg", getAnalisisImgs);

router.put('/analisisImg/:id', UpdateAnalisisImg);

router.delete('/analisisImg/:id', deleteAnalisisImg);

router.get ('/analisisImg/:id', getAnalisisImg);

export default router;