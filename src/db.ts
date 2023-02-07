import {DataSource} from 'typeorm'
import 'dotenv/config'


/*export const AppDataSource = new DataSource({
    type: `postgres`,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    entities: ['src/entities/*{.ts,.js}'],
    synchronize: true,
  });*/
 export const AppDataSourse = new DataSource({
type:'postgres',
host: 'localhost',
username: 'postgres',
password: 'camila',
port:5433,
database:'ambulatorio',
entities: ['src/entities/*.ts'],
logging: true,
synchronize: true
});