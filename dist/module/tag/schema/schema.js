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
exports.DeleteTagResponse = exports.UpdateTagResponse = exports.CreateTagResponse = exports.Tag = void 0;
const graphql_1 = require("@nestjs/graphql");
let Tag = exports.Tag = class Tag {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], Tag.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Tag.prototype, "name", void 0);
exports.Tag = Tag = __decorate([
    (0, graphql_1.ObjectType)()
], Tag);
let CreateTagResponse = exports.CreateTagResponse = class CreateTagResponse {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Tag)
], CreateTagResponse.prototype, "tag", void 0);
exports.CreateTagResponse = CreateTagResponse = __decorate([
    (0, graphql_1.ObjectType)()
], CreateTagResponse);
let UpdateTagResponse = exports.UpdateTagResponse = class UpdateTagResponse {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Tag)
], UpdateTagResponse.prototype, "tag", void 0);
exports.UpdateTagResponse = UpdateTagResponse = __decorate([
    (0, graphql_1.ObjectType)()
], UpdateTagResponse);
let DeleteTagResponse = exports.DeleteTagResponse = class DeleteTagResponse {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], DeleteTagResponse.prototype, "success", void 0);
exports.DeleteTagResponse = DeleteTagResponse = __decorate([
    (0, graphql_1.ObjectType)()
], DeleteTagResponse);
//# sourceMappingURL=schema.js.map