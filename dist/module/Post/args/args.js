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
exports.DeletePostArgs = exports.UpdatePostArgs = exports.CreatePostArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreatePostArgs = exports.CreatePostArgs = class CreatePostArgs {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreatePostArgs.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreatePostArgs.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreatePostArgs.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreatePostArgs.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreatePostArgs.prototype, "subcategoryId", void 0);
exports.CreatePostArgs = CreatePostArgs = __decorate([
    (0, graphql_1.InputType)()
], CreatePostArgs);
let UpdatePostArgs = exports.UpdatePostArgs = class UpdatePostArgs {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], UpdatePostArgs.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdatePostArgs.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdatePostArgs.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdatePostArgs.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], UpdatePostArgs.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], UpdatePostArgs.prototype, "subcategoryId", void 0);
exports.UpdatePostArgs = UpdatePostArgs = __decorate([
    (0, graphql_1.InputType)()
], UpdatePostArgs);
let DeletePostArgs = exports.DeletePostArgs = class DeletePostArgs {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], DeletePostArgs.prototype, "id", void 0);
exports.DeletePostArgs = DeletePostArgs = __decorate([
    (0, graphql_1.InputType)()
], DeletePostArgs);
//# sourceMappingURL=args.js.map