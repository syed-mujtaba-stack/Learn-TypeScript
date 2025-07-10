// Day 11: Example Script

function exampleIdentity<T>(arg: T): T {
  return arg;
}

console.log(exampleIdentity<boolean>(true));
console.log(exampleIdentity<{a: number}>({a: 5}));
