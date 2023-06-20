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
exports.DeleteMetaResponse = exports.UpdateMetaResponse = exports.CreateMetaResponse = exports.Meta = void 0;
const graphql_1 = require("@nestjs/graphql");
let Meta = exports.Meta = class Meta {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], Meta.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Meta.prototype, "metaTitle", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Meta.prototype, "metaDescription", void 0);
exports.Meta = Meta = __decorate([
    (0, graphql_1.ObjectType)()
], Meta);
let CreateMetaResponse = exports.CreateMetaResponse = class CreateMetaResponse {
};
__decorate([
    (0, graphql_1.Field)(() => Meta),
    __metadata("design:type", Meta)
], CreateMetaResponse.prototype, "meta", void 0);
exports.CreateMetaResponse = CreateMetaResponse = __decorate([
    (0, graphql_1.ObjectType)()
], CreateMetaResponse);
let UpdateMetaResponse = exports.UpdateMetaResponse = class UpdateMetaResponse {
};
__decorate([
    (0, graphql_1.Field)(() => Meta),
    __metadata("design:type", Meta)
], UpdateMetaResponse.prototype, "meta", void 0);
exports.UpdateMetaResponse = UpdateMetaResponse = __decorate([
    (0, graphql_1.ObjectType)()
], UpdateMetaResponse);
let DeleteMetaResponse = exports.DeleteMetaResponse = class DeleteMetaResponse {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], DeleteMetaResponse.prototype, "success", void 0);
exports.DeleteMetaResponse = DeleteMetaResponse = __decorate([
    (0, graphql_1.ObjectType)()
], DeleteMetaResponse);
//# sourceMappingURL=schema.js.map