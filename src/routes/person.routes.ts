import { Router } from "express";
import { createPerson, deletePerson, getPerson, getPersons, getPersonss, UpdatePerson, } from "../controllers/person.controllers";

const router = Router();

router.post("/person", createPerson);

router.get("/person", getPerson);

router.put('/person/:id', UpdatePerson);

router.delete('/person/:id', deletePerson);

router.get ('/person/:id', getPersons);

router.get ('/person/:identificacion', getPersonss)

export default router;