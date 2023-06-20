"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const post_entity_1 = require("./entity/post.entity");
const category_module_1 = require("../category/category.module");
const subcategory_module_1 = require("../subcategory/subcategory.module");
const post_service_1 = require("./post.service");
const post_resolver_1 = require("./post.resolver");
let PostModule = exports.PostModule = class PostModule {
};
exports.PostModule = PostModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([post_entity_1.PostEntity]),
            category_module_1.CategoryModule,
            subcategory_module_1.SubcategoryModule,
        ],
        providers: [post_service_1.PostService, post_resolver_1.PostResolver],
    })
], PostModule);
//# sourceMappingURL=post.module.js.map