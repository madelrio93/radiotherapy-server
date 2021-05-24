import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { SignInDto } from './inputs/sigin.dto';
export declare class AuthService {
    private readonly _userService;
    private readonly _jwtService;
    constructor(_userService: UserService, _jwtService: JwtService);
    validateUser({ username, password }: SignInDto): Promise<{
        username: string;
        active: boolean;
        isAdmin: boolean;
        lastName: string;
        name: string;
        id: number;
    }>;
    login({ username, password }: SignInDto): Promise<string>;
    private userAccountVerify;
}
