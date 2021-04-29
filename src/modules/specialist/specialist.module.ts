import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SpecialistService } from './specialist.service';
import { SpecialistResolver } from './specialist.resolver';
import { Specialist } from './entities/specialist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Specialist])],
  providers: [SpecialistResolver, SpecialistService],
})
export class SpecialistModule {}
