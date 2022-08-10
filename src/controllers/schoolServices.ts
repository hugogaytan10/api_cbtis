import { Request, Response } from "express";
import SchoolServices from "../models/schoolServices";
const modelServices = new SchoolServices();
export class Controller {
    async getSchoolServices(req: Request, res: Response){
        try{
            const catched = await modelServices.find();
            const activities = await modelServices.findActivities();
            if(!catched) res.status(400);
            if(!activities) res.status(400);
            res.status(200).json({
                docente: catched,
                actividades: activities
            });
        }catch(error){
            res.status(400).json(error);
        }
    }
}