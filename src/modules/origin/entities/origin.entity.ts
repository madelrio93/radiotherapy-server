import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, OneToMany } from 'typeorm';

import { TreatmentFile } from '../../treatment-file/entities/treatment-file.entity';
import { Common } from '../../../shared';
import { ORIGINS } from '../../../constants';

@ObjectType()
@Entity(ORIGINS)
export class Origin extends Common {
  @Field(() => [TreatmentFile])
  @OneToMany(
    () => TreatmentFile,
    (treatmentFile: TreatmentFile) => treatmentFile.origin
  )
  treatmentsFiles: Promise<TreatmentFile[]>;
}
