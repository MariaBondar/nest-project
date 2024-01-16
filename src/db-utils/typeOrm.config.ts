import entities from "../typeorm/index";
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { InitialMasterSetup1705421997635 } from "src/migrations/1705421997635-InitialMasterSetup";
 
config();
 
export default new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [...entities],
    migrations: [InitialMasterSetup1705421997635],
    synchronize: true,
});
