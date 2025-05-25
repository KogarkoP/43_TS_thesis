export type AnimalType = {
  name: string;
  age: number;
};

export type ZebraType = AnimalType & {
  maxSpeed: number;
  origin: string;
};

export type ElephantType = AnimalType & {
  weight: number;
};

export type TigerType = AnimalType & {
  wasOutsideInLast8h: boolean;
};

export type EmployeeType = {
  isEmployeeAtZoo: boolean;
  safetyTrainingCompletionDate: Date;
};

export type FeedingLog = {
  animalName: string;
  fedAt: Date;
};
