import { DataSource } from "typeorm"
import { UserEntity } from "./entity/User"
import { NewspostEntity } from "./entity/Newspost"

export const AppDataSource = new DataSource({
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5432,
    url:"postgres://pwnwstfq:tkwD7T_rzPFMRAsksiMILOeLXcltAW7H@cornelius.db.elephantsql.com/pwnwstfq",
    username: "postgres",
    password: "55236",
    database: "postgres",
    synchronize: false,
    logging: true,
    entities: [UserEntity, NewspostEntity],
    // migrations: ["src/dal/migrations/*.ts"],
    subscribers: [],
})     