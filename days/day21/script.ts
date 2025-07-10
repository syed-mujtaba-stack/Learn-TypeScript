// Day 21: Example Script

type ExampleUser = { id: number; name: string; email?: string };
type ExampleRequiredUser = Required<ExampleUser>;
type ExampleReadonlyUser = Readonly<ExampleUser>;

let exampleUser: ExampleRequiredUser = { id: 1, name: 'Ali', email: 'ali@email.com' };
console.log(exampleUser);
