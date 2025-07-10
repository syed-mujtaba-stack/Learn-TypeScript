// Day 15 Solution: Type Assertions

let solInput: any = 123;
let solLength = (solInput as string).length;
console.log(solLength); // undefined, because 123 is not a string
