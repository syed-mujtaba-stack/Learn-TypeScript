// Day 18: Example Script

interface ExampleSquare { kind: 'square'; size: number; }
interface ExampleCircle { kind: 'circle'; radius: number; }
type ExampleShape = ExampleSquare | ExampleCircle;

function exampleArea(shape: ExampleShape): number {
  switch (shape.kind) {
    case 'square': return shape.size * shape.size;
    case 'circle': return Math.PI * shape.radius * shape.radius;
  }
}

console.log(exampleArea({ kind: 'square', size: 4 }));
console.log(exampleArea({ kind: 'circle', radius: 3 }));
