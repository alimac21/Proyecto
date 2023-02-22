import { Router } from "express";
import { loginCtrl/*, registerCtrl*/, logoutCtrl, meCtrl} from "../controllers/auth.controllers";
import { authentication } from "../middlewares/authentication"
export const router = Router();

router.post("/login", loginCtrl);
router.post("/logout", logoutCtrl);
router.get("/me", authentication, meCtrl);

export default router;
