// Day 22 Solution: Type Narrowing

function solDescribeValue(val: string | number | boolean) {
  if (typeof val === 'string') {
    console.log('String:', val);
  } else if (typeof val === 'number') {
    console.log('Number:', val);
  } else {
    console.log('Boolean:', val);
  }
}

solDescribeValue('Ali');
solDescribeValue(42);
solDescribeValue(true);
