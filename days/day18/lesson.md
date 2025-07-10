# Day 18: Discriminated Unions

Discriminated unions help you handle multiple related types safely and clearly.

---

## Example
```ts
interface Square { kind: 'square'; size: number; }
interface Circle { kind: 'circle'; radius: number; }
type Shape = Square | Circle;

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'square': return shape.size * shape.size;
    case 'circle': return Math.PI * shape.radius * shape.radius;
  }
}
```

---

## Pro Tip
Always use a common literal property (like `kind`) for discriminated unions.

---

**Next:** Practice discriminated unions in the exercise!
