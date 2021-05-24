import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
export declare class UserService {
    private readonly _userRepository;
    constructor(_userRepository: Repository<User>);
    create(createUserInput: CreateUserInput): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, updateUserInput: UpdateUserInput): Promise<User>;
    remove(id: number): Promise<number>;
    findByUsername(username: string): Promise<User>;
    private isUser;
}
