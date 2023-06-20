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
exports.TagResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const tag_service_1 = require("./tag.service");
const args_1 = require("./args/args");
const schema_1 = require("./schema/schema");
let TagResolver = exports.TagResolver = class TagResolver {
    constructor(tagService) {
        this.tagService = tagService;
    }
    async getAllTags() {
        return this.tagService.getAllTags();
    }
    async createTag(name) {
        const tag = await this.tagService.createTag(name);
        return { tag };
    }
    async updateTag(args) {
        const tag = await this.tagService.updateTag(args.id, args.name);
        return { tag };
    }
    async deleteTag(args) {
        await this.tagService.deleteTag(args.id);
        return { success: true };
    }
};
__decorate([
    (0, graphql_1.Query)(() => [schema_1.Tag]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TagResolver.prototype, "getAllTags", null);
__decorate([
    (0, graphql_1.Mutation)(() => schema_1.CreateTagResponse),
    __param(0, (0, graphql_1.Args)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TagResolver.prototype, "createTag", null);
__decorate([
    (0, graphql_1.Mutation)(() => schema_1.UpdateTagResponse),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [args_1.UpdateTagArgs]),
    __metadata("design:returntype", Promise)
], TagResolver.prototype, "updateTag", null);
__decorate([
    (0, graphql_1.Mutation)(() => schema_1.DeleteTagResponse),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [args_1.DeleteTagArgs]),
    __metadata("design:returntype", Promise)
], TagResolver.prototype, "deleteTag", null);
exports.TagResolver = TagResolver = __decorate([
    (0, graphql_1.Resolver)(() => schema_1.Tag),
    __metadata("design:paramtypes", [tag_service_1.TagService])
], TagResolver);
//# sourceMappingURL=tag.resolver.js.map