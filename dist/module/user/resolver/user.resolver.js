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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_service_1 = require("src/module/user/service/user.service");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
let UserResolver = exports.UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    hello() {
        return 'Hello, world!';
    }
    async login(email, password) {
        const user = await this.userService.getUserByEmail(email);
        if (!user) {
            throw new Error('Invalid credentials');
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            throw new Error('Invalid credentials');
        }
        const token = jwt.sign({ id: user.id, email: user.email }, 'MySuperSecretKey123!');
        return token;
    }
};
__decorate([
    (0, graphql_1.Query)(returns => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], UserResolver.prototype, "hello", null);
__decorate([
    (0, graphql_1.Mutation)(returns => String),
    __param(0, (0, graphql_1.Args)({ name: 'email', type: () => String })),
    __param(1, (0, graphql_1.Args)({ name: 'password', type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
exports.UserResolver = UserResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserResolver);
//# sourceMappingURL=user.resolver.js.map