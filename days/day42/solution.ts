// Day 42 Solution: Assertion Functions

function solAssertNumber42(val: unknown): asserts val is number {
  if (typeof val !== 'number') {
    throw new Error('Not a number!');
  }
}

let solValue42: unknown = 3.14159;
solAssertNumber42(solValue42);
console.log(solValue42.toFixed(2));
