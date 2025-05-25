import type { EmployeeType, FeedingLog } from "../types/types";
import { Animal } from "../animals/animals";

export abstract class Employee {
  isEmployeeAtZoo: boolean;
  safetyTrainingCompletionDate: Date;

  constructor({ isEmployeeAtZoo, safetyTrainingCompletionDate }: EmployeeType) {
    this.isEmployeeAtZoo = isEmployeeAtZoo;
    this.safetyTrainingCompletionDate = safetyTrainingCompletionDate;
  }

  enterZoo(): void {
    this.isEmployeeAtZoo = true;
  }

  leaveZoo(): void {
    this.isEmployeeAtZoo = false;
  }

  takeSafetyTrainings(date: Date): void {
    this.safetyTrainingCompletionDate = date;
  }
}

export class Zookeeper extends Employee {
  feedingLogs: FeedingLog[] = [];

  feedAnimal(animal: Animal) {
    const timeFed = new Date();
    this.feedingLogs.push({ animalName: animal.name, fedAt: timeFed });
  }
}

export class Employees {
  employees: Zookeeper[] = [];

  addEmployee(employee: Zookeeper) {
    this.employees.push(employee);
  }

  getAllEmployees(): void {
    console.log(this.employees);
  }
}
