// Day 24 Solution: Function Overloads

function solCombine(a: number, b: number): number;
function solCombine(a: string, b: string): string;
function solCombine(a: any, b: any): any {
  return a + b;
}

console.log(solCombine(2, 3));
console.log(solCombine('a', 'b'));
