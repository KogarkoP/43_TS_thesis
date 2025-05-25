export class Employee {
    constructor({ isEmployeeAtZoo, safetyTrainingCompletionDate }) {
        this.isEmployeeAtZoo = isEmployeeAtZoo;
        this.safetyTrainingCompletionDate = safetyTrainingCompletionDate;
    }
    enterZoo() {
        this.isEmployeeAtZoo = true;
    }
    leaveZoo() {
        this.isEmployeeAtZoo = false;
    }
    takeSafetyTrainings(date) {
        this.safetyTrainingCompletionDate = date;
    }
}
export class Zookeeper extends Employee {
    constructor() {
        super(...arguments);
        this.feedingLogs = [];
    }
    feedAnimal(animal) {
        const timeFed = new Date();
        this.feedingLogs.push({ animalName: animal.name, fedAt: timeFed });
    }
}
export class Employees {
    constructor() {
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    getAllEmployees() {
        console.log(this.employees);
    }
}
