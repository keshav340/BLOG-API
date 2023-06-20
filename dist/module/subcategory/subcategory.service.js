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
exports.SubcategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const subcategory_entity_1 = require("./entity/subcategory.entity");
const category_entity_1 = require("../category/entity/category.entity");
let SubcategoryService = exports.SubcategoryService = class SubcategoryService {
    constructor(subcategoryRepository, categoryRepository) {
        this.subcategoryRepository = subcategoryRepository;
        this.categoryRepository = categoryRepository;
    }
    async createSubcategory(name, description, categoryId) {
        const category = await this.categoryRepository.findOne({ where: { id: categoryId } });
        if (!category) {
            throw new Error('Category not found');
        }
        const subcategory = new subcategory_entity_1.SubcategoryEntity();
        subcategory.name = name;
        subcategory.description = description;
        subcategory.category = category;
        return this.subcategoryRepository.save(subcategory);
    }
    async getSubcategoryById(id) {
        return this.subcategoryRepository
            .createQueryBuilder('subcategory')
            .leftJoinAndSelect('subcategory.category', 'category')
            .where('subcategory.id = :id', { id })
            .getOne();
    }
    async getAllSubcategories() {
        return this.subcategoryRepository.find({ relations: ['category'] });
    }
    async updateSubcategory(id, name, description, categoryId) {
        const subcategory = await this.subcategoryRepository.createQueryBuilder('subcategory')
            .leftJoinAndSelect('subcategory.category', 'category')
            .where('subcategory.id = :id', { id })
            .getOne();
        if (!subcategory) {
            throw new Error('Subcategory not found');
        }
        if (name) {
            subcategory.name = name;
        }
        if (description) {
            subcategory.description = description;
        }
        if (categoryId) {
            const category = await this.categoryRepository.findOne({ where: { id: categoryId } });
            if (!category) {
                throw new Error('Category not found');
            }
            subcategory.category = category;
        }
        return this.subcategoryRepository.save(subcategory);
    }
    async deleteSubcategory(id) {
        const result = await this.subcategoryRepository.delete(id);
        return result.affected > 0;
    }
};
exports.SubcategoryService = SubcategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(subcategory_entity_1.SubcategoryEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(category_entity_1.CategoryEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], SubcategoryService);
//# sourceMappingURL=subcategory.service.js.map