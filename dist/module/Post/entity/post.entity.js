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
exports.PostEntity = void 0;
const typeorm_1 = require("typeorm");
const category_entity_1 = require("../../category/entity/category.entity");
const subcategory_entity_1 = require("../../subcategory/entity/subcategory.entity");
let PostEntity = exports.PostEntity = class PostEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PostEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PostEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PostEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PostEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.CategoryEntity, category => category.posts),
    __metadata("design:type", category_entity_1.CategoryEntity)
], PostEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subcategory_entity_1.SubcategoryEntity, subcategory => subcategory.posts),
    __metadata("design:type", subcategory_entity_1.SubcategoryEntity)
], PostEntity.prototype, "subcategory", void 0);
exports.PostEntity = PostEntity = __decorate([
    (0, typeorm_1.Entity)()
], PostEntity);
//# sourceMappingURL=post.entity.js.map