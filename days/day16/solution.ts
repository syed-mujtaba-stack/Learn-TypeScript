// Day 16 Solution: Nullable Types & Non-Null Assertion

let solUsername: string | null = null;
solUsername = 'Sara';

function solPrintUsername(name?: string | null) {
  console.log(name!.length);
}

solPrintUsername(solUsername);
