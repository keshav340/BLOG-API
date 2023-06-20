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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("./entity/category.entity");
let CategoryService = exports.CategoryService = class CategoryService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async getCategoryById(id) {
        return this.categoryRepository.findOne({ where: { id: id } });
    }
    async getAllCategories() {
        return this.categoryRepository.find();
    }
    async createCategory(args) {
        const { name, description } = args;
        const category = new category_entity_1.CategoryEntity();
        category.name = name;
        category.description = description;
        return this.categoryRepository.save(category);
    }
    async updateCategory(args) {
        const { id, name, description } = args;
        const category = await this.categoryRepository.findOne({ where: { id: id } });
        if (!category) {
            throw new Error('Category not found');
        }
        if (name) {
            category.name = name;
        }
        if (description) {
            category.description = description;
        }
        return this.categoryRepository.save(category);
    }
    async deleteCategory(args) {
        const { id } = args;
        const result = await this.categoryRepository.delete(id);
        return result.affected > 0;
    }
};
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.CategoryEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoryService);
//# sourceMappingURL=category.service.js.map