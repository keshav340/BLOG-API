import { UserService } from 'src/module/user/service/user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    hello(): string;
    login(email: string, password: string): Promise<string>;
}
