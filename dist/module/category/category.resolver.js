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
exports.CategoryResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const category_schema_1 = require("./schema/category.schema");
const category_service_1 = require("./category.service");
const createcategory_args_1 = require("./args/createcategory.args");
const updatecategory_args_1 = require("./args/updatecategory.args");
const deletecategory_args_1 = require("./args/deletecategory.args");
let CategoryResolver = exports.CategoryResolver = class CategoryResolver {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async category(id) {
        return this.categoryService.getCategoryById(id);
    }
    async categories() {
        return this.categoryService.getAllCategories();
    }
    async createCategory(args) {
        return this.categoryService.createCategory(args);
    }
    async updateCategory(args) {
        return this.categoryService.updateCategory(args);
    }
    async deleteCategory(args) {
        return this.categoryService.deleteCategory(args);
    }
};
__decorate([
    (0, graphql_1.Query)(() => category_schema_1.Category, { nullable: true }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "category", null);
__decorate([
    (0, graphql_1.Query)(() => [category_schema_1.Category]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "categories", null);
__decorate([
    (0, graphql_1.Mutation)(() => category_schema_1.Category),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createcategory_args_1.CreateCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "createCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => category_schema_1.Category),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updatecategory_args_1.UpdateCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "updateCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deletecategory_args_1.DeleteCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "deleteCategory", null);
exports.CategoryResolver = CategoryResolver = __decorate([
    (0, graphql_1.Resolver)(() => category_schema_1.Category),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryResolver);
//# sourceMappingURL=category.resolver.js.map