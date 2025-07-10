// Day 40 Solution: Infer Keyword

type SolReturnType40<T> = T extends (...args: any[]) => infer R ? R : never;

function solGreet40(): string {
  return 'Hello';
}

type SolGreetReturn40 = SolReturnType40<typeof solGreet40>;
const solResult40: SolGreetReturn40 = 'Hello from infer!';
console.log(solResult40);
