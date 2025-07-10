// Day 41 Solution: Template Literal Types

type SolRoute41 = `/${'user' | 'admin'}/${number}`;

const solPath41: SolRoute41 = '/user/123';
console.log(solPath41);
