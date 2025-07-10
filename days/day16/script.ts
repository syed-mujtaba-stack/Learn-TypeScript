// Day 16: Example Script

let exampleValue16: string | null = null;
exampleValue16 = 'TypeScript';

function examplePrintLength(str?: string | null) {
  console.log(str!.length);
}

examplePrintLength(exampleValue16);
