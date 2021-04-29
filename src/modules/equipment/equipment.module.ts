import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EquipmentService } from './equipment.service';
import { EquipmentResolver } from './equipment.resolver';
import { Equipment } from './entities/equipment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Equipment])],
  providers: [EquipmentResolver, EquipmentService],
})
export class EquipmentModule {}
