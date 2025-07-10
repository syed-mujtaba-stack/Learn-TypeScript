// Day 13 Solution: Union & Intersection Types

let solData: string | number;
solData = 'abc';
solData = 123;

interface SolHasName { name: string; }
interface SolHasAge { age: number; }

let solPerson: SolHasName & SolHasAge = { name: 'Sara', age: 28 };
