import type {
  AnimalType,
  ZebraType,
  ElephantType,
  TigerType,
} from "../types/types";

export class Animal {
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

export class Animals {
  animals: Animal[] = [];

  addAnimal(animal: Animal) {
    this.animals.push(animal);
  }

  getAllAnimals(): void {
    console.log(this.animals);
  }
}

export class Zebra extends Animal implements Runners {
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

export class Elephant extends Animal implements Wanderers {
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

export class Tiger extends Animal implements Hunters {
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
