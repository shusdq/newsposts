"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewspostFactory = exports.UserFactory = exports.Factory = void 0;
const User_1 = require("../entity/User");
const faker_1 = require("@faker-js/faker");
const bcrypt_1 = __importDefault(require("bcrypt"));
const Newspost_1 = require("../entity/Newspost");
class Factory {
}
exports.Factory = Factory;
class UserFactory extends Factory {
    constructor() {
        super();
        this.create = async () => {
            const user = new User_1.UserEntity();
            user.email = faker_1.faker.internet.email();
            const password = faker_1.faker.internet.password();
            const encryptedPassword = await bcrypt_1.default.hash(password, 10);
            user.password = encryptedPassword;
            return user;
        };
        super.entity = User_1.UserEntity;
    }
}
exports.UserFactory = UserFactory;
class NewspostFactory extends Factory {
    constructor() {
        super();
        this.create = async () => {
            const newspost = new Newspost_1.NewspostEntity();
            newspost.title = faker_1.faker.lorem.words(3);
            newspost.text = faker_1.faker.lorem.paragraph(3);
            newspost.isPrivate = faker_1.faker.datatype.boolean();
            newspost.createdAt = faker_1.faker.date.anytime();
            return newspost;
        };
        super.entity = Newspost_1.NewspostEntity;
    }
}
exports.NewspostFactory = NewspostFactory;
