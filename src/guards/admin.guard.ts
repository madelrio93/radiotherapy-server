import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const user = GqlExecutionContext.create(context).getContext().req.user;
    if (!user.isAdmin)
      throw new ForbiddenException('El usuario no es administrador');
    return true;
  }
}
