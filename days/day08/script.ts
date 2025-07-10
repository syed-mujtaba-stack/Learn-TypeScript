// Day 8: Example Script

class ExampleAnimal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

let exampleDog = new ExampleAnimal('Dog');
exampleDog.speak();
