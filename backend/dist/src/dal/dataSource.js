"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./entity/User");
const Newspost_1 = require("./entity/Newspost");
exports.AppDataSource = new typeorm_1.DataSource({
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5432,
    url: "postgres://pwnwstfq:tkwD7T_rzPFMRAsksiMILOeLXcltAW7H@cornelius.db.elephantsql.com/pwnwstfq",
    username: "postgres",
    password: "55236",
    database: "postgres",
    synchronize: false,
    logging: true,
    entities: [User_1.UserEntity, Newspost_1.NewspostEntity],
    // migrations: ["src/dal/migrations/*.ts"],
    subscribers: [],
});
