import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TreatmentFileService } from './treatment-file.service';
import { TreatmentFileResolver } from './treatment-file.resolver';
import { TreatmentFile } from './entities/treatment-file.entity';
import { Patient } from './entities/patient.entity';
import { SpecialistModule } from '../specialist/specialist.module';
import { EquipmentModule } from '../equipment/equipment.module';
import { LocationModule } from '../location/location.module';
import { OriginModule } from '../origin/origin.module';
import { StageModule } from '../stage/stage.module';
import { AuthModule } from '../auth/auth.module';
import { TreatmentFileController } from './treatment-file.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([TreatmentFile, Patient]),
    AuthModule,
    SpecialistModule,
    EquipmentModule,
    LocationModule,
    OriginModule,
    StageModule,
  ],
  providers: [TreatmentFileResolver, TreatmentFileService],
  exports: [TreatmentFileService],
  controllers: [TreatmentFileController],
})
export class TreatmentFileModule {}
