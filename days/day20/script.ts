// Day 20: Example Script

type ExamplePerson = { name: string; age: number };
type ExampleReadonlyPerson = Readonly<ExamplePerson>;

let examplePerson: ExampleReadonlyPerson = { name: 'Sara', age: 22 };
// examplePerson.age = 23; // Error: Cannot assign to 'age' because it is a read-only property
console.log(examplePerson);
