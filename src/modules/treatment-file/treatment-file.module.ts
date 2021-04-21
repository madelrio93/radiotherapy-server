import { Module } from '@nestjs/common';
import { TreatmentFileService } from './treatment-file.service';
import { TreatmentFileResolver } from './treatment-file.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TreatmentFile } from './entities/treatment-file.entity';

@Module({
  providers: [TreatmentFileResolver, TreatmentFileService],
  imports: [TypeOrmModule.forFeature([TreatmentFile])],
})
export class TreatmentFileModule {}
