// Day 40: Example Script

type ExampleFirstArg40<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : never;

function exampleSum40(a: number, b: number): number {
  return a + b;
}

type ExampleSumFirstArg40 = ExampleFirstArg40<typeof exampleSum40>;
const exampleVal40: ExampleSumFirstArg40 = 10;
console.log('First argument type:', typeof exampleVal40);
