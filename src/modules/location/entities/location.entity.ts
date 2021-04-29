import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, OneToMany } from 'typeorm';

import { TreatmentFile } from '../../treatment-file/entities/treatment-file.entity';
import { Common } from '../../../shared';
import { LOCATIONS } from '../../../constants';

@ObjectType()
@Entity(LOCATIONS)
export class Location extends Common {
  @Field(() => [TreatmentFile])
  @OneToMany(
    () => TreatmentFile,
    (treatmentFile: TreatmentFile) => treatmentFile.location
  )
  treatmentsFiles: Promise<TreatmentFile[]>;
}
