"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const typeorm_1 = require("typeorm");
(0, dotenv_1.config)();
const dataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    ssl: process.env.DB_SSL === 'true',
    entities: [`${__dirname}/../src/**/*.entity{.ts,.js}`],
    migrations: [`${__dirname}/../src/db/migrations/*{.ts,.js}`],
    migrationsTableName: 'migrations',
});
exports.default = dataSource;
//# sourceMappingURL=typeorm-config.js.map