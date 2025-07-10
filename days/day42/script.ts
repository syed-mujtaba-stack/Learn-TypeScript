// Day 42: Example Script

function exampleAssertArray42(val: unknown): asserts val is any[] {
  if (!Array.isArray(val)) {
    throw new Error('Not an array!');
  }
}

let exampleVal42: unknown = [1, 2, 3];
exampleAssertArray42(exampleVal42);
console.log('Array length:', exampleVal42.length);
