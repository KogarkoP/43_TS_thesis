"use strict";
class Animal {
    constructor({ name, age }) {
        this.name = name;
        this.age = age;
    }
    makeSound() { }
}
class Zebra extends Animal {
    constructor({ name, age, maxSpeed, origin }) {
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
class Elephant extends Animal {
    constructor({ name, age, weight }) {
        super({ name, age });
        this.weight = weight;
    }
    sleep() {
        console.log("Elephants only sleeps 4 hours per day");
    }
    walk() {
        console.log("Elephants may walk 195–200 km in a day, but usually only 25–30 km.");
    }
    makeSound() {
        console.log("The elephant raised its trunk and let out a powerful “prrrrRRRAAAHH!”");
    }
}
class Tiger extends Animal {
    constructor({ name, age, wasOutsideInLast8h }) {
        super({ name, age });
        this.wasOutsideInLast8h = wasOutsideInLast8h;
    }
    swim() {
        console.log("Tigers can swim upto 4–6 KM");
    }
    hunt() {
        console.log("The Siberian Tiger's favourite foods include elk, deer, wild boar, lynx and bear");
    }
    makeSound() {
        console.log("The tiger crouched low, letting out a low “grrrrrr…” ");
    }
}
class Employee {
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
class Zookeeper extends Employee {
    constructor() {
        super(...arguments);
        this.feedingLogs = [];
    }
    feedAnimal(animal) {
        const timeFed = new Date();
        this.feedingLogs.push({ animalName: animal.name, fedAt: timeFed });
    }
}
class Animals {
    constructor() {
        this.animals = [];
    }
    addAnimal(animal) {
        this.animals.push(animal);
    }
    getAllAnimals() {
        console.log(this.animals);
    }
}
class Employees {
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
// ===============================================================>
const animalName = document.getElementById("animals");
const animalAge = document.getElementById("animal_age");
const animalSubmitBtn = document.getElementById("animal_btn");
const showAllAnimalsBtn = document.getElementById("show_animals");
const employeePresents = document.getElementById("absent_or_present");
const employeeSafetyTraining = document.getElementById("safety_training");
const employeeSubmitBtn = document.getElementById("employee_btn");
const showAllEmployees = document.getElementById("show_employees");
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
