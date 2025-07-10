// Day 10: Example Script

class ExampleBook {
  readonly title: string;
  constructor(title: string) {
    this.title = title;
  }
}

class ExampleMath {
  static PI = 3.14159;
  static double(x: number) {
    return x * 2;
  }
}

let exampleBook = new ExampleBook('TypeScript Handbook');
console.log(exampleBook.title);
console.log(ExampleMath.PI);
console.log(ExampleMath.double(10));
