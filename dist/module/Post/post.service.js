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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const post_entity_1 = require("./entity/post.entity");
let PostService = exports.PostService = class PostService {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async getAllPosts() {
        return this.postRepository.find();
    }
    async getPostById(id) {
        return this.postRepository.findOne({ where: { id: id } });
    }
    async createPost(postData) {
        const post = this.postRepository.create(postData);
        return this.postRepository.save(post);
    }
    async updatePost(id, postData) {
        const post = await this.postRepository.findOne({ where: { id: id } });
        if (!post) {
            throw new Error('Post not found');
        }
        Object.assign(post, postData);
        return this.postRepository.save(post);
    }
    async deletePost(id) {
        const result = await this.postRepository.delete(id);
        return result.affected > 0;
    }
};
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.PostEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostService);
//# sourceMappingURL=post.service.js.map