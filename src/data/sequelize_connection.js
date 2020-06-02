import Sequelize from 'sequelize';
import dotenv from 'dotenv';

// if (ENV) {
//     dotenv.config({ path: `./${ENV}.env` });
//     console.log("Data base env --->", ENV, PG_DATABASE);
// }

let PG_HOST = "111.118.241.66"
let PG_PORT = 2546
let PG_USER = "time_sheet"
let PG_PASSWORD = "jkdsvnahv"
let PG_DATABASE = "47timesheet-dev"

export const db = new Sequelize(PG_DATABASE, PG_USER, PG_PASSWORD,
    {
        host: PG_HOST,
        port: PG_PORT,
        dialect: 'postgres',
        pool: {
            idleTimeoutMillis: 30000,
            min: 5,
            max: 20
        },
        define: {
            timestamp: false
        }
    });



