# Day 13: Union & Intersection Types

TypeScript lets you combine and restrict types using union (`|`) and intersection (`&`).

---

## Union Types
- A variable can be one of several types
```ts
let value: string | number;
value = 'hello';
value = 123;
```

## Intersection Types
- Combine multiple types into one
```ts
interface A { a: number; }
interface B { b: string; }
let obj: A & B = { a: 1, b: 'hi' };
```

---

## Pro Tip
Use unions for flexibility, intersections for combining requirements.

---

**Next:** Practice unions and intersections in the exercise!
