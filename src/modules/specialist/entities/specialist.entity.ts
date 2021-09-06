import { ObjectType, Field } from '@nestjs/graphql';

import { TreatmentFile } from '../../treatment-file/entities/treatment-file.entity';

import { Entity, OneToMany } from 'typeorm';
import { Person } from '../../../shared/person';
import { SPECIALISTS } from '../../../constants';

@ObjectType()
@Entity(SPECIALISTS)
export class Specialist extends Person {
  @Field(() => [TreatmentFile])
  @OneToMany(
    () => TreatmentFile,
    (treatmentFile: TreatmentFile) => treatmentFile.speciaList
  )
  treatmenstFiles: TreatmentFile[];
}
