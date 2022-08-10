import { Router } from "express";
import { Controller } from "../controllers/schoolServices";
const routes = Router();
const controller = new Controller();
//EJEMPLO http://localhost:8090/api/alumnosDestacados
routes.get('/serviciosEscolares', controller.getSchoolServices);
export default routes;