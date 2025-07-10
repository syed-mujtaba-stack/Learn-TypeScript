// Day 39: Example Script

type ExampleIsArray39<T> = T extends any[] ? true : false;

const exampleArr39: ExampleIsArray39<number[]> = true;
const exampleNotArr39: ExampleIsArray39<string> = false;
console.log('Is array:', exampleArr39);
console.log('Is not array:', exampleNotArr39);
