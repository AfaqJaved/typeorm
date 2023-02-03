import { DataSource } from "typeorm"
import path from "path"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "",
    database: "school",
    entities: [path.join(__dirname,".." , "entities/*.entity{.ts,.js}")],
    synchronize: true,
    logging: true,
})



