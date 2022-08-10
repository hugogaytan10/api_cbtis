import { Request, Response } from "express";
import Student from "../models/students";
const modelStudent = new Student();
export class Controller {
    async getStudents(req: Request, res: Response){
        try{
            const catched = await modelStudent.find();
            const achievements = await modelStudent.findAchievements();
            if(!catched) res.status(400);
            if(!achievements) res.status(400);
            res.status(200).json({
                estudiante: catched,
                logros: achievements
            });
        }catch(error){
            res.status(400).json(error);
        }
    }
}