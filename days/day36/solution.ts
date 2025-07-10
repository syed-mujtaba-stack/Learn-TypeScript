// Day 36 Solution: TypeScript Abstract Classes

abstract class SolShape36 {
  abstract area(): number;
}

class SolRectangle36 extends SolShape36 {
  constructor(public width: number, public height: number) { super(); }
  area() { return this.width * this.height; }
}

class SolCircle36 extends SolShape36 {
  constructor(public radius: number) { super(); }
  area() { return Math.PI * this.radius * this.radius; }
}

const solRect36 = new SolRectangle36(4, 5);
const solCircle36 = new SolCircle36(3);
console.log('Rectangle area:', solRect36.area());
console.log('Circle area:', solCircle36.area());
