// Day 10 Solution: Readonly & Static

class SolCircle {
  readonly radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  static area(radius: number): number {
    return Math.PI * radius * radius;
  }
}

let solCircle = new SolCircle(5);
console.log(SolCircle.area(solCircle.radius));
