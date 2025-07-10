// Day 12: Example Script

function exampleMerge<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

console.log(exampleMerge<string, number>('Ali', 22));
console.log(exampleMerge<boolean, string>(true, 'yes'));
