"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./src/App"));
const typedi_1 = __importDefault(require("typedi"));
const NewsController_1 = __importDefault(require("./src/controllers/NewsController"));
const convictConfig_1 = __importDefault(require("./src/utils/convictConfig"));
const AuthController_1 = __importDefault(require("./src/controllers/AuthController"));
const dataSource_1 = require("./src/dal/dataSource");
const main = async () => {
    const port = convictConfig_1.default.get('PORT');
    const host = convictConfig_1.default.get('HOST');
    dataSource_1.AppDataSource.initialize().then(() => {
        const app = new App_1.default([typedi_1.default.get(NewsController_1.default), typedi_1.default.get(AuthController_1.default)], port, host);
        app.listen();
    }).catch((error) => console.log(error));
};
main();
