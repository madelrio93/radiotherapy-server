import { PrimaryId } from '../../../shared';
import { Status } from '../../../constants';
import { Patient } from './patient.entity';
import { Specialist } from '../../specialist/entities/specialist.entity';
import { Equipment } from '../../equipment/entities/equipment.entity';
import { Location } from '../../location/entities/location.entity';
import { Origin } from '../../origin/entities/origin.entity';
import { Stage } from '../../stage/entities/stage.entity';
export declare class TreatmentFile extends PrimaryId {
    createAt: Date;
    consultationDate: Date;
    status: Status;
    patient: Promise<Patient>;
    speciaList: Promise<Specialist>;
    equipment: Promise<Equipment>;
    location: Promise<Location>;
    origin: Promise<Origin>;
    stage: Promise<Stage>;
}
