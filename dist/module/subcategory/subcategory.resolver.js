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
exports.SubcategoryResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const subcategory_schema_1 = require("./schema/subcategory.schema");
const subcategory_service_1 = require("./subcategory.service");
const args_1 = require("./args/args");
let SubcategoryResolver = exports.SubcategoryResolver = class SubcategoryResolver {
    constructor(subcategoryService) {
        this.subcategoryService = subcategoryService;
    }
    async subcategory(id) {
        const parsedId = parseInt(id, 10);
        return this.subcategoryService.getSubcategoryById(parsedId);
    }
    async subcategories() {
        return this.subcategoryService.getAllSubcategories();
    }
    async createSubcategory({ name, description, categoryId }) {
        const parsedCategoryId = parseInt(categoryId, 10);
        return this.subcategoryService.createSubcategory(name, description, parsedCategoryId);
    }
    async updateSubcategory(id, name, description, categoryId) {
        return this.subcategoryService.updateSubcategory(parseInt(id, 10), name, description, categoryId);
    }
    async deleteSubcategory(id) {
        return this.subcategoryService.deleteSubcategory(parseInt(id, 10));
    }
};
__decorate([
    (0, graphql_1.Query)(() => subcategory_schema_1.Subcategory, { nullable: true }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubcategoryResolver.prototype, "subcategory", null);
__decorate([
    (0, graphql_1.Query)(() => [subcategory_schema_1.Subcategory]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SubcategoryResolver.prototype, "subcategories", null);
__decorate([
    (0, graphql_1.Mutation)(() => subcategory_schema_1.Subcategory),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [args_1.CreateSubcategoryArgs]),
    __metadata("design:returntype", Promise)
], SubcategoryResolver.prototype, "createSubcategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => subcategory_schema_1.Subcategory),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __param(1, (0, graphql_1.Args)('name')),
    __param(2, (0, graphql_1.Args)('description')),
    __param(3, (0, graphql_1.Args)('categoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number]),
    __metadata("design:returntype", Promise)
], SubcategoryResolver.prototype, "updateSubcategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubcategoryResolver.prototype, "deleteSubcategory", null);
exports.SubcategoryResolver = SubcategoryResolver = __decorate([
    (0, graphql_1.Resolver)(() => subcategory_schema_1.Subcategory),
    __metadata("design:paramtypes", [subcategory_service_1.SubcategoryService])
], SubcategoryResolver);
//# sourceMappingURL=subcategory.resolver.js.map