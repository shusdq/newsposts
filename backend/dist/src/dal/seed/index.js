"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataSource_1 = require("../dataSource");
const helper_1 = require("./helper");
dataSource_1.AppDataSource.initialize().then(async () => {
    await dataSource_1.AppDataSource.manager.transaction(async (transactionEntityManager) => {
        await (0, helper_1.createUser)(transactionEntityManager);
        await (0, helper_1.createNewsposts)(transactionEntityManager, 20);
    });
});
