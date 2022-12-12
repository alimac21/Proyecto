import {DataSource} from 'typeorm'
import { User } from './entities/user'
import { Person } from './entities/person'

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
})