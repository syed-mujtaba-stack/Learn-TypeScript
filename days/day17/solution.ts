// Day 17 Solution: Type Guards

function solPrintType(value: string | number) {
  if (typeof value === 'string') {
    console.log('String:', value);
  } else {
    console.log('Number:', value);
  }
}

solPrintType('Ali');
solPrintType(123);
