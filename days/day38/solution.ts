// Day 38 Solution: Symbols & Unique Symbols

const solSymA38: symbol = Symbol('desc');
const solSymB38: symbol = Symbol('desc');
const solSymbolsEqual38: boolean = solSymA38 === solSymB38;
console.log(solSymbolsEqual38); // false

const solObj38: { [key: symbol]: string } = {};
solObj38[solSymA38] = 'Value for symA';
console.log(solObj38[solSymA38]);
