import { Router } from "express";
import { create } from "../controllers/medicoperson.controller"
  
  const router = Router();
  
  router.post("/medicoperson", create );
  
  router.get("/", );
  
  router.put("//:id", );
  
  router.delete("//:id", );
  
  export default router;