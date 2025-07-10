// Day 37 Solution: Generators & Iterators

function* solRange37(start: number, end: number) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

for (const num of solRange37(1, 5)) {
  console.log(num);
}
