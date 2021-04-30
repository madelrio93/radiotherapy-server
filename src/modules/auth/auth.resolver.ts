import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { AuthService } from './auth.service';
import { SignInDto } from './inputs/sigin.dto';
import { Public } from '../../decorators';

@Public()
@Resolver()
export class AuthResolver {
  constructor(private readonly _authService: AuthService) {}

  @Mutation(() => String)
  login(@Args('sigin', { type: () => SignInDto }) sigin: SignInDto) {
    return this._authService.login(sigin);
  }
}
