// Day 38: Example Script

const exampleSym38 = Symbol('example');
const exampleObj38 = { [exampleSym38]: 123 };
console.log('Symbol value:', exampleObj38[exampleSym38]);
