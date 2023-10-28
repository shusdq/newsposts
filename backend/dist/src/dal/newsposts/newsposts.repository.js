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
;
const dataSource_1 = require("../dataSource");
const Newspost_1 = require("../entity/Newspost");
let NewspostsRepository = class NewspostsRepository {
    constructor() {
        this.getAllNewspostsPaged = async ({ page, size }) => {
            try {
                const queryBuilder = this.repository.createQueryBuilder("newspost");
                const total = await queryBuilder.getCount();
                const response = await queryBuilder.leftJoinAndSelect("newspost.author", "author")
                    .skip((page + 0) * size)
                    .take(size)
                    .getMany();
                return {
                    pageOptions: { page, size },
                    total,
                    results: response,
                };
            }
            catch (error) {
                throw error;
            }
        };
        this.getNewspostById = async (id) => {
            const queryBuilder = this.repository.createQueryBuilder("newspost");
            const response = queryBuilder.leftJoinAndSelect("newspost.author", "author")
                .where('newspost.id = :id', { id: id })
                .getOne();
            return response;
        };
        this.createNewspost = async (newsposts) => {
            const queryBuilder = this.repository.createQueryBuilder();
            const response = queryBuilder.insert()
                .into(Newspost_1.NewspostEntity)
                .values(Object.assign(Object.assign({}, newsposts), { createdAt: new Date() }))
                .execute();
            return response;
        };
        this.updateNewspost = async (updatedFields, id) => {
            const queryBuilder = this.repository.createQueryBuilder();
            const response = await queryBuilder.update(Newspost_1.NewspostEntity)
                .set(updatedFields)
                .where('newspost.id = :id', { id: id })
                .execute();
            return response;
        };
        this.deleteNewspost = async (id) => {
            const queryBuilder = this.repository.createQueryBuilder('newspost');
            const response = queryBuilder.delete()
                .from(Newspost_1.NewspostEntity)
                .where("newspost.id = :id", { id: id })
                .execute();
            return response;
        };
        this.repository = dataSource_1.AppDataSource.getRepository(Newspost_1.NewspostEntity);
    }
};
NewspostsRepository = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [])
], NewspostsRepository);
exports.default = NewspostsRepository;
