export interface IStatistics {
  all: number;
  treaty: any;
  notTreated: number;
  waiting: number;
  inTreatment: number;
}

export interface IStatisticsTreatyByEquipment {
  year: Date;
  value: number;
}
