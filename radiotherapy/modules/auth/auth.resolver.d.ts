import { AuthService } from './auth.service';
import { SignInDto } from './inputs/sigin.dto';
export declare class AuthResolver {
    private readonly _authService;
    constructor(_authService: AuthService);
    login(sigin: SignInDto): Promise<string>;
}
