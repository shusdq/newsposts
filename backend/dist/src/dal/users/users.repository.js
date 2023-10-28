"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const dataSource_1 = require("../dataSource");
const User_1 = require("../entity/User");
let UsersRepository = class UsersRepository {
    constructor() {
        this.getByEmail = async (email) => {
            const queryBuilder = this.repository.createQueryBuilder('user');
            const response = queryBuilder
                .where("user.email = :email", { email: email })
                .getOne();
            return response;
        };
        this.createAUser = async (user) => {
            const queryBuilder = this.repository.createQueryBuilder();
            const response = queryBuilder.insert()
                .into(User_1.UserEntity)
                .values(user)
                .execute();
            return response;
        };
        this.repository = dataSource_1.AppDataSource.getRepository(User_1.UserEntity);
    }
};
UsersRepository = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [])
], UsersRepository);
exports.default = UsersRepository;
