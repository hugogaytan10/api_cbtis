import { Router } from "express";
import { Controller } from "../controllers/teachingServices";
const routes = Router();
const controller = new Controller();
//EJEMPLO http://localhost:8090/api/alumnosDestacados
routes.get('/serviciosDocentes', controller.getTeachingServices);
export default routes;