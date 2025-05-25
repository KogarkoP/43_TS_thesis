export class Animal {
    constructor({ name, age }) {
        this.name = name;
        this.age = age;
    }
    makeSound() { }
}
export class Animals {
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
export class Zebra extends Animal {
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
export class Elephant extends Animal {
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
export class Tiger extends Animal {
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
