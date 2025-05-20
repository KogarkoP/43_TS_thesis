type AnimalType = {
  name: string;
  age: number;
};

type ZebraType = AnimalType & {
  maxSpeed: number;
  origin: string;
};

type ElephantType = AnimalType & {
  weight: number;
};

type TigerType = AnimalType & {
  wasOutsideInLast8h: boolean;
};

class Animal {
  name: string;
  age: number;

  constructor({ name, age }: AnimalType) {
    this.name = name;
    this.age = age;
  }

  makeSound(): void {}
}

interface Wanderers {
  sleep(): void;
  walk(): void;
}

interface Runners {
  jump(): void;
  run(): void;
}

interface Hunters {
  swim(): void;
  hunt(): void;
}

class Zebra extends Animal implements Runners {
  maxSpeed: number;
  origin: string;

  constructor({ name, age, maxSpeed, origin }: ZebraType) {
    super({ name, age });
    this.maxSpeed = maxSpeed;
    this.origin = origin;
  }

  jump() {
    console.log("Zebra can Jump");
  }

  run() {
    console.log("Zebra can run very fast");
  }

  makeSound() {
    console.log("Zebra gave a sharp “phrrrff!”");
  }
}

class Elephant extends Animal implements Wanderers {
  weight: number;

  constructor({ name, age, weight }: ElephantType) {
    super({ name, age });
    this.weight = weight;
  }

  sleep() {
    console.log("Elephants only sleeps 4 hours per day");
  }

  walk() {
    console.log(
      "Elephants may walk 195–200 km in a day, but usually only 25–30 km."
    );
  }

  makeSound() {
    console.log(
      "The elephant raised its trunk and let out a powerful “prrrrRRRAAAHH!”"
    );
  }
}

class Tiger extends Animal implements Hunters {
  wasOutsideInLast8h: boolean;

  constructor({ name, age, wasOutsideInLast8h }: TigerType) {
    super({ name, age });
    this.wasOutsideInLast8h = wasOutsideInLast8h;
  }
  swim() {
    console.log("Tigers can swim upto 4–6 KM");
  }

  hunt() {
    console.log(
      "The Siberian Tiger's favourite foods include elk, deer, wild boar, lynx and bear"
    );
  }

  makeSound() {
    console.log("The tiger crouched low, letting out a low “grrrrrr…” ");
  }
}

type EmployeeType = {
  isEmployeeAtZoo: boolean;
  safetyTrainingCompletionDate: Date;
};

abstract class Employee {
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

type FeedingLog = {
  animalName: string;
  fedAt: Date;
};

class Zookeeper extends Employee {
  feedingLogs: FeedingLog[] = [];

  feedAnimal(animal: Animal) {
    const timeFed = new Date();
    this.feedingLogs.push({ animalName: animal.name, fedAt: timeFed });
  }
}

class Animals {
  animals: Animal[] = [];

  addAnimal(animal: Animal) {
    this.animals.push(animal);
  }

  getAllAnimals(): void {
    console.log(this.animals);
  }
}

class Employees {
  employees: Zookeeper[] = [];

  addEmployee(employee: Zookeeper) {
    this.employees.push(employee);
  }

  getAllEmployees(): void {
    console.log(this.employees);
  }
}

// ===============================================================>

const animalName = document.getElementById("animals") as HTMLSelectElement;
const animalAge = document.getElementById("animal_age") as HTMLInputElement;
const animalSubmitBtn = document.getElementById(
  "animal_btn"
) as HTMLButtonElement;
const showAllAnimalsBtn = document.getElementById(
  "show_animals"
) as HTMLButtonElement;

const employeePresents = document.getElementById(
  "absent_or_present"
) as HTMLSelectElement;
const employeeSafetyTraining = document.getElementById(
  "safety_training"
) as HTMLDataElement;
const employeeSubmitBtn = document.getElementById(
  "employee_btn"
) as HTMLButtonElement;
const showAllEmployees = document.getElementById(
  "show_employees"
) as HTMLButtonElement;

const animals = new Animals();
const employees = new Employees();

animalSubmitBtn.addEventListener("click", () => {
  const animal = new Animal({ name: animalName.value, age: +animalAge.value });
  animals.addAnimal(animal);
  animalName.value = "";
  animalAge.value = "";
});

showAllAnimalsBtn.addEventListener("click", () => {
  animals.getAllAnimals();
});

employeeSubmitBtn.addEventListener("click", () => {
  const isPresent = employeePresents.value === "Yes";
  const dateValue = employeeSafetyTraining.value;
  const employee = new Zookeeper({
    isEmployeeAtZoo: isPresent,
    safetyTrainingCompletionDate: new Date(dateValue),
  });
  employees.addEmployee(employee);
  employeePresents.value = "";
  employeeSafetyTraining.value = "";
});

showAllEmployees.addEventListener("click", () => {
  employees.getAllEmployees();
});
