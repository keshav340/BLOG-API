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
exports.Mutation = exports.Query = exports.Category = void 0;
const graphql_1 = require("@nestjs/graphql");
let Category = exports.Category = class Category {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], Category.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Category.prototype, "description", void 0);
exports.Category = Category = __decorate([
    (0, graphql_1.ObjectType)()
], Category);
let Query = exports.Query = class Query {
};
__decorate([
    (0, graphql_1.Field)(() => Category, { nullable: true }),
    __metadata("design:type", Category)
], Query.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Category]),
    __metadata("design:type", Array)
], Query.prototype, "categories", void 0);
exports.Query = Query = __decorate([
    (0, graphql_1.ObjectType)()
], Query);
let Mutation = exports.Mutation = class Mutation {
};
__decorate([
    (0, graphql_1.Field)(() => Category),
    __metadata("design:type", Category)
], Mutation.prototype, "createCategory", void 0);
__decorate([
    (0, graphql_1.Field)(() => Category),
    __metadata("design:type", Category)
], Mutation.prototype, "updateCategory", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], Mutation.prototype, "deleteCategory", void 0);
exports.Mutation = Mutation = __decorate([
    (0, graphql_1.ObjectType)()
], Mutation);
//# sourceMappingURL=category.schema.js.map