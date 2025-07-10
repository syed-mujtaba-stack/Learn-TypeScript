// Day 39 Solution: Conditional Types

type SolIsNumber39<T> = T extends number ? true : false;

const solTestNum39: SolIsNumber39<number> = true;
const solTestStr39: SolIsNumber39<string> = false;
console.log('Is number:', solTestNum39);
console.log('Is string:', solTestStr39);
