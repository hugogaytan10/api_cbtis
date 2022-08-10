import connection from "../services/mysql";
import Database from "../services/database";

class TeachingService extends Database {
    constructor(){
        super({table: 'servicios_docentes'})
    }
    findActivities(){
        return new Promise((resolve, reject)=>{
            connection.query(`SELECT * FROM detalles_asuntos_docentes;`,
            (error: any, results: any, fields: any) => {
                if(error) reject(error);
                resolve(results);
            })
        })
    }
}
export default TeachingService;