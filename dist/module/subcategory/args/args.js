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
exports.DeleteSubcategoryArgs = exports.UpdateSubcategoryArgs = exports.CreateSubcategoryArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateSubcategoryArgs = exports.CreateSubcategoryArgs = class CreateSubcategoryArgs {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateSubcategoryArgs.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateSubcategoryArgs.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], CreateSubcategoryArgs.prototype, "categoryId", void 0);
exports.CreateSubcategoryArgs = CreateSubcategoryArgs = __decorate([
    (0, graphql_1.ArgsType)()
], CreateSubcategoryArgs);
let UpdateSubcategoryArgs = exports.UpdateSubcategoryArgs = class UpdateSubcategoryArgs {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], UpdateSubcategoryArgs.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateSubcategoryArgs.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateSubcategoryArgs.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID, { nullable: true }),
    __metadata("design:type", String)
], UpdateSubcategoryArgs.prototype, "categoryId", void 0);
exports.UpdateSubcategoryArgs = UpdateSubcategoryArgs = __decorate([
    (0, graphql_1.ArgsType)()
], UpdateSubcategoryArgs);
let DeleteSubcategoryArgs = exports.DeleteSubcategoryArgs = class DeleteSubcategoryArgs {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], DeleteSubcategoryArgs.prototype, "id", void 0);
exports.DeleteSubcategoryArgs = DeleteSubcategoryArgs = __decorate([
    (0, graphql_1.ArgsType)()
], DeleteSubcategoryArgs);
//# sourceMappingURL=args.js.map