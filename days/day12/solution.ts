// Day 12 Solution: Generics (Advanced)

function solFirstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(solFirstElement<string>(['a', 'b', 'c']));
console.log(solFirstElement<number>([1, 2, 3]));
