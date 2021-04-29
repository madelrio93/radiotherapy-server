import { Module } from '@nestjs/common';
import { TreatmentFileService } from './treatment-file.service';
import { TreatmentFileResolver } from './treatment-file.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TreatmentFile } from './entities/treatment-file.entity';
import { Patient } from './entities/patient.entity';
import { SpecialistModule } from '../specialist/specialist.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([TreatmentFile, Patient]),
    SpecialistModule,
  ],
  providers: [TreatmentFileResolver, TreatmentFileService],
})
export class TreatmentFileModule {}
