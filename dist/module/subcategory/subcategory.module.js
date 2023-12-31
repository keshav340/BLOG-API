"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubcategoryModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const subcategory_entity_1 = require("./entity/subcategory.entity");
const subcategory_resolver_1 = require("./subcategory.resolver");
const subcategory_service_1 = require("./subcategory.service");
const category_entity_1 = require("../category/entity/category.entity");
let SubcategoryModule = exports.SubcategoryModule = class SubcategoryModule {
};
exports.SubcategoryModule = SubcategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([subcategory_entity_1.SubcategoryEntity, category_entity_1.CategoryEntity])],
        providers: [subcategory_resolver_1.SubcategoryResolver, subcategory_service_1.SubcategoryService],
    })
], SubcategoryModule);
//# sourceMappingURL=subcategory.module.js.map