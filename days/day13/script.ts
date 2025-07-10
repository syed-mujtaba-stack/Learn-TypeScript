// Day 13: Example Script

let exampleValue13: string | number = 'hello';
exampleValue13 = 42;

interface ExampleA { a: number; }
interface ExampleB { b: string; }

let exampleObj13: ExampleA & ExampleB = { a: 5, b: 'yes' };
console.log(exampleObj13);
