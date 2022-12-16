import { Router } from "express";
import { createAlergia, deleteAlergia, getAlergia, getAlergias, UpdateAlergia } from "../controllers/alergia.controllers"

const router = Router();

router.post("/alergia", createAlergia);

router.get("/alergia", getAlergias);

router.put('/alergia/:id', UpdateAlergia);

router.delete('/alergia/:id', deleteAlergia);

router.get ('/alergia/:id', getAlergia);

export default router;