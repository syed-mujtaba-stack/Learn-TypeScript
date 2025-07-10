// Day 26: Example Script

function exampleFetch(): Promise<number> {
  return new Promise((resolve) => setTimeout(() => resolve(42), 500));
}

async function exampleLoad() {
  const num = await exampleFetch();
  console.log('Loaded number:', num);
}

exampleLoad();
