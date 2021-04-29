import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OriginService } from './origin.service';
import { OriginResolver } from './origin.resolver';
import { Origin } from './entities/origin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Origin])],
  providers: [OriginResolver, OriginService],
})
export class OriginModule {}
