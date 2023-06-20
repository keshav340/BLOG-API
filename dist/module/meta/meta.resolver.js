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
exports.MetaResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const meta_service_1 = require("./meta.service");
const schema_1 = require("./schema/schema");
const args_1 = require("./args/args");
let MetaResolver = exports.MetaResolver = class MetaResolver {
    constructor(metaService) {
        this.metaService = metaService;
    }
    async getAllMeta() {
        return this.metaService.findAll();
    }
    async getMetaById(id) {
        return this.metaService.findById(id);
    }
    async createMeta({ metaTitle, metaDescription }) {
        const meta = await this.metaService.create(metaTitle, metaDescription);
        return { meta };
    }
    async updateMeta({ id, metaTitle, metaDescription }) {
        const meta = await this.metaService.update(id, metaTitle, metaDescription);
        return { meta };
    }
    async deleteMeta(deleteMetaArgs) {
        const success = await this.metaService.delete(deleteMetaArgs.id);
        return { success };
    }
};
__decorate([
    (0, graphql_1.Query)(() => [schema_1.Meta]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MetaResolver.prototype, "getAllMeta", null);
__decorate([
    (0, graphql_1.Query)(() => schema_1.Meta),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MetaResolver.prototype, "getMetaById", null);
__decorate([
    (0, graphql_1.Mutation)(() => schema_1.CreateMetaResponse),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [args_1.CreateMetaArgs]),
    __metadata("design:returntype", Promise)
], MetaResolver.prototype, "createMeta", null);
__decorate([
    (0, graphql_1.Mutation)(() => schema_1.UpdateMetaResponse),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [args_1.UpdateMetaArgs]),
    __metadata("design:returntype", Promise)
], MetaResolver.prototype, "updateMeta", null);
__decorate([
    (0, graphql_1.Mutation)(() => schema_1.DeleteMetaResponse),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [args_1.DeleteMetaArgs]),
    __metadata("design:returntype", Promise)
], MetaResolver.prototype, "deleteMeta", null);
exports.MetaResolver = MetaResolver = __decorate([
    (0, graphql_1.Resolver)(() => schema_1.Meta),
    __metadata("design:paramtypes", [meta_service_1.MetaService])
], MetaResolver);
//# sourceMappingURL=meta.resolver.js.map