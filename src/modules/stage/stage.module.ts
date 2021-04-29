import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StageService } from './stage.service';
import { StageResolver } from './stage.resolver';
import { Stage } from './entities/stage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Stage])],
  providers: [StageResolver, StageService],
})
export class StageModule {}
