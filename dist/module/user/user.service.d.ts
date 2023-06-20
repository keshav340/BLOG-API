import { Repository } from 'typeorm';
import { UserEntity } from 'src/module/user/entity/user.entity';
import { UserInput } from 'src/module/user/dto/user.input';
export declare class UserService {
    readonly userRepo: Repository<UserEntity>;
    constructor(userRepo: Repository<UserEntity>);
    getUserByEmail(email: string): Promise<UserEntity>;
    createUser(userInput: UserInput): Promise<UserEntity>;
}
