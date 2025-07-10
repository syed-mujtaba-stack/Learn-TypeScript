// Day 24: Example Script

function exampleAdd(a: number, b: number): number;
function exampleAdd(a: string, b: string): string;
function exampleAdd(a: any, b: any): any {
  return a + b;
}

console.log(exampleAdd(5, 7));
console.log(exampleAdd('Type', 'Script'));
