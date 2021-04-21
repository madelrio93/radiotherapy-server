import { Module } from '@nestjs/common';
import { TreatmentFileService } from './treatment-file.service';
import { TreatmentFileResolver } from './treatment-file.resolver';

@Module({
  providers: [TreatmentFileResolver, TreatmentFileService]
})
export class TreatmentFileModule {}
