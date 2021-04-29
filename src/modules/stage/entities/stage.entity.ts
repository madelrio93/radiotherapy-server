import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, OneToMany } from 'typeorm';

import { TreatmentFile } from '../../treatment-file/entities/treatment-file.entity';
import { Common } from '../../../shared';
import { STAGE } from '../../../constants';

@ObjectType()
@Entity(STAGE)
export class Stage extends Common {
  @Field(() => [TreatmentFile])
  @OneToMany(
    () => TreatmentFile,
    (treatmentFile: TreatmentFile) => treatmentFile.stage
  )
  treatmentsFiles: Promise<TreatmentFile[]>;
}
