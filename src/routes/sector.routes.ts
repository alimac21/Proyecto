import { Router } from "express";
import { createSector, deleteSector, getSector, updateSector } from "../controllers/sector.controllers"

const router = Router();

router.post("/sector", createSector);

router.get("/sector", getSector);

router.put('/sector/:id', updateSector);

router.delete('/sector/:id', deleteSector);

export default router;