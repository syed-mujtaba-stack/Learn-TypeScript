// Day 22: Example Script

function examplePrintValue(val: string | number) {
  if (typeof val === 'string') {
    console.log('String:', val);
  } else {
    console.log('Number:', val);
  }
}

examplePrintValue('TypeScript');
examplePrintValue(2025);
