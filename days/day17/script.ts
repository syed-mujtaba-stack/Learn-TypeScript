// Day 17: Example Script

function examplePrintId(id: string | number) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

examplePrintId('ts');
examplePrintId(3.14159);
