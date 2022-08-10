import { Router } from "express";
import { Controller } from "../controllers/students";
const routes = Router();
const controller = new Controller();
//EJEMPLO http://localhost:8090/api/alumnosDestacados
routes.get('/alumnosDestacados', controller.getStudents);
export default routes;