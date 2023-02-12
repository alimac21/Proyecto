import { Router } from "express";
import { createComunidad, deleteComunidad, getComunidad, updateComunidad } from "../controllers/comunidad.controllers"

const router = Router();

router.post("/comunidad", createComunidad);

router.put('/comunidad/:id', updateComunidad);

router.delete('/comunidad/:id', deleteComunidad);

router.get ('/comunidad/:id', getComunidad);

export default router;