import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { KEY_SECRECT } from '../../../config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: KEY_SECRECT,
    });
  }

  async validate(payload: any) {
    return {
      userId: payload.id,
      isAdmin: payload.isAdmin,
      active: payload.active,
    };
  }
}
