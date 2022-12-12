import { Router } from "express";
import { createUser, deleteUser, getUsers, getUser,UpdateUser} from "../controllers/user.controllers";

const router = Router();

router.post("/users", createUser);

router.get("/users", getUsers);

router.put('/users/:id', UpdateUser);

router.delete('/users/:id', deleteUser);

router.get ('/users/:id', getUser);

export default router;