import { Router } from "express";
import { createPersonaux, deletePersonaux, getPersonaux, getPersonauxs, UpdatePersonaux } from "../controllers/personaux.controllers"

const router = Router();

router.post("/personaux", createPersonaux);

router.get("/personaux", getPersonauxs);

router.put('/personaux/:id', UpdatePersonaux);

router.delete('/personaux/:id', deletePersonaux);

router.get ('/personaux/:id', getPersonaux);

export default router;