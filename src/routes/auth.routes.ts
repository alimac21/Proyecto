import { Router } from "express";
import {login} from "../controllers/auth.controlllers";

export const router = Router();

router.post("/login",login);

//router.post("/register",register);
