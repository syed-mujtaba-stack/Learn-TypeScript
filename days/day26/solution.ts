// Day 26 Solution: Promises & Async/Await

function solGetMessage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Hello from Promise!'), 1000);
  });
}

async function solShowMessage() {
  const msg = await solGetMessage();
  console.log(msg);
}

solShowMessage();
