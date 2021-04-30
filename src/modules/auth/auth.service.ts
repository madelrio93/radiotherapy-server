import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

import { UserService } from '../user/user.service';

import { SignInDto } from './inputs/sigin.dto';

import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly _userService: UserService,
    private readonly _jwtService: JwtService
  ) {}

  /** Verify user password */
  async validateUser({ username, password }: SignInDto) {
    const user = await this._userService.findByUsername(username);
    if (user && (await compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login({ username, password }: SignInDto) {
    const user = await this.validateUser({ username, password });

    this.userAccountVerify(user);

    const payload = {
      id: user.id,
      name: user.name,
      lastName: user.lastName,
      isAdmin: user.isAdmin,
      active: user.active,
    };

    return this._jwtService.sign(payload);
  }
  /** Verify user exist and if active */
  private userAccountVerify<T extends Partial<User>>(user: T): void {
    if (!user) throw new NotFoundException('Usuario y contraseña incorrrectas');
    if (!user.active)
      throw new UnauthorizedException(
        'Su cuenta se encuentra desactivada por favor contacte al administrador'
      );
  }
}
