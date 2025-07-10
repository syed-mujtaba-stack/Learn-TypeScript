// Day 35 Solution: TypeScript Decorators

function SolTimestamp35<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    createdAt = new Date();
  };
}

@SolTimestamp35
class SolPost35 {}

const solPost35 = new SolPost35() as any;
console.log('Created at:', solPost35.createdAt);
