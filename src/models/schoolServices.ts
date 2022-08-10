import connection from "../services/mysql";
import Database from "../services/database";

class SchoolService extends Database {
    constructor(){
        super({table: 'servicios_escolares'})
    }

    findActivities(){
        return new Promise((resolve, reject)=>{
            connection.query(`SELECT * FROM detalles_asuntos_escolares;`,
            (error: any, results: any, fields: any) => {
                if(error) reject(error);
                resolve(results);
            })
        })
    }
}

export default SchoolService;