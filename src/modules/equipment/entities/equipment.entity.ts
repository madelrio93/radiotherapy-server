import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, OneToMany } from 'typeorm';

import { TreatmentFile } from '../../treatment-file/entities/treatment-file.entity';
import { Common } from '../../../shared';
import { EQUIPMENTS } from '../../../constants';

@ObjectType()
@Entity(EQUIPMENTS)
export class Equipment extends Common {
  @Field(() => [TreatmentFile])
  @OneToMany(
    () => TreatmentFile,
    (treatmentFile: TreatmentFile) => treatmentFile.equipment
  )
  treatmentsFiles: Promise<TreatmentFile[]>;
}
