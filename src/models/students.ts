import Database from "../services/database";
import connection from "../services/mysql";

class Students extends Database{
    constructor(){
        super({table: 'alumnos'});
    }
    

    findAchievements(){
        return new Promise((resolve, reject)=>{
            connection.query(`SELECT * FROM detalles_alumno;`,
            (error: any, results: any, fields: any) => {
                if(error) reject(error);
                resolve(results);
            })
        })
    }
}
export default Students;