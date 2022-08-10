import { Request, Response } from "express";
import TeachingServices from "../models/teachingServices";
const modelTeaching = new TeachingServices();
export class Controller {
    async getTeachingServices(req: Request, res: Response){
        try{
            const catched = await modelTeaching.find();
            const activities = await modelTeaching.findActivities();
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