// Day 19: Example Script

const exampleObj = { x: 10, y: 'hi' };
type ExampleObjKeys = keyof typeof exampleObj;
type ExampleObjType = typeof exampleObj;

let exampleKey: ExampleObjKeys = 'x';
console.log(exampleKey);
