// Day 11 Solution: Generics (Basics)

function solWrapInArray<T>(value: T): T[] {
  return [value];
}

console.log(solWrapInArray<string>('Ali'));
console.log(solWrapInArray<number>(123));
