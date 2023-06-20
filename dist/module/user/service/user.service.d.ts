import { Repository } from 'typeorm';
import { User } from 'src/module/user/entity/user.entity';
import { UserInput } from 'src/module/user/dto/user.input';
export declare class UserService {
    readonly userRepo: Repository<User>;
    constructor(userRepo: Repository<User>);
    getUserByEmail(email: string): Promise<User>;
    createUser(userInput: UserInput): Promise<User>;
}
