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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const newsposts_repository_1 = __importDefault(require("../dal/newsposts/newsposts.repository"));
let NewspostsService = class NewspostsService {
    constructor(newsposts) {
        this.newsposts = newsposts;
        this.getAllPostsPaged = (params) => {
            return this.newsposts.getAllNewspostsPaged(params);
        };
        this.getById = async (id) => {
            return this.newsposts.getNewspostById(id);
        };
        this.create = (fields) => {
            return this.newsposts.createNewspost(fields);
        };
        this.update = async (id, updatedFields) => {
            return this.newsposts.updateNewspost(updatedFields, id);
        };
        this.delete = async (id) => {
            return this.newsposts.deleteNewspost(id);
        };
    }
};
NewspostsService = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [newsposts_repository_1.default])
], NewspostsService);
exports.default = NewspostsService;
