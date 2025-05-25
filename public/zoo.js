import { Animals, Animal } from "./features/animals/animals.js";
import { Employees, Zookeeper } from "./features/zookeeper/zookeeper.js";
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
  if (isNaN(+animalAge.value)) {
    alert("Age has to be a Number");
    return;
  }
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
