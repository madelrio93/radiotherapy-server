/**-----------Tables Names-----------*/
export const TREATMENTS_FILES = 'treatments_files';

export const PATIENTS = 'patients';

export const SPECIALISTS = 'specialists';

export const EQUIPMENTS = 'equipments';

export const LOCATIONS = 'locations';

export const ORIGINS = 'origins';

export const STAGE = 'stages';

export const USERS = 'users';

/**-----------Enums------------------ */
export enum Status {
  NO_TRATADO = 'no tratado',
  TRATADO = 'tratado',
  EN_ESPERA = 'en espera',
  EN_TRATAMIENTO = 'en tratamiento',
}

export enum Sex {
  F = 'Femenino',
  M = 'Masculino',
}

/**-----------Message------------------ */
export const TREATMENT_FILE_NOT_FOUND = 'No se encuentra el expediente';
