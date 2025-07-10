// Day 31 Solution: TypeScript Modules (import/export)

// multiply.ts
export function solMultiply31(a: number, b: number): number {
  return a * b;
}

// solution.ts
import { multiply } from './multiply';
console.log(multiply(4, 5));
