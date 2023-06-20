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
exports.SubcategoryEntity = void 0;
const typeorm_1 = require("typeorm");
const category_entity_1 = require("../../category/entity/category.entity");
const post_entity_1 = require("../../Post/entity/post.entity");
let SubcategoryEntity = exports.SubcategoryEntity = class SubcategoryEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SubcategoryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SubcategoryEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SubcategoryEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.CategoryEntity, category => category.subcategories),
    __metadata("design:type", category_entity_1.CategoryEntity)
], SubcategoryEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => post_entity_1.PostEntity, post => post.subcategory),
    __metadata("design:type", Array)
], SubcategoryEntity.prototype, "posts", void 0);
exports.SubcategoryEntity = SubcategoryEntity = __decorate([
    (0, typeorm_1.Entity)()
], SubcategoryEntity);
//# sourceMappingURL=subcategory.entity.js.map