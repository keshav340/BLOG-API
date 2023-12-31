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
exports.MetaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const meta_entity_1 = require("./entity/meta.entity");
let MetaService = exports.MetaService = class MetaService {
    constructor(metaRepository) {
        this.metaRepository = metaRepository;
    }
    async findAll() {
        return this.metaRepository.find();
    }
    async findById(id) {
        return this.metaRepository.findOne({ where: { id } });
    }
    async create(metaTitle, metaDescription) {
        const meta = this.metaRepository.create({ metaTitle, metaDescription });
        return this.metaRepository.save(meta);
    }
    async update(id, metaTitle, metaDescription) {
        const meta = await this.metaRepository.findOne({ where: { id } });
        if (!meta) {
            throw new Error('Meta not found');
        }
        meta.metaTitle = metaTitle;
        meta.metaDescription = metaDescription;
        return this.metaRepository.save(meta);
    }
    async delete(id) {
        const result = await this.metaRepository.delete(id);
        return result.affected > 0;
    }
};
exports.MetaService = MetaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(meta_entity_1.MetaEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MetaService);
//# sourceMappingURL=meta.service.js.map