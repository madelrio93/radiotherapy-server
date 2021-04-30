import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { KEY_SECRECT } from '../../config';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies';
import { GqlAuthGuard } from '../../guards';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    UserModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: KEY_SECRECT,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [
    AuthResolver,
    AuthService,
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: GqlAuthGuard,
    },
  ],
  exports: [AuthService],
})
export class AuthModule {}
