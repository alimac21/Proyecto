"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSourse = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("./entities/user");
exports.AppDataSourse = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'camila',
    port: 5433,
    database: 'ambulatorio',
    entities: [user_1.User],
    logging: true,
    synchronize: true
});
