"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewsposts = exports.createUser = void 0;
const factory_1 = require("./factory");
const createUser = async (manager) => {
    const userFactory = new factory_1.UserFactory();
    const user = await userFactory.create();
    await manager.insert(userFactory.entity, user);
};
exports.createUser = createUser;
const createNewsposts = async (manager, count) => {
    const newspostFactory = new factory_1.NewspostFactory();
    for (let index = 0; index < count; index++) {
        const newspost = await newspostFactory.create();
        await manager.insert(newspostFactory.entity, newspost);
    }
};
exports.createNewsposts = createNewsposts;
