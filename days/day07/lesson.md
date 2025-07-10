# Day 7: Interfaces

Interfaces define the shape of objects in TypeScript, making your code more robust and self-documenting.

---

## Declaring an Interface
```ts
interface Person {
  name: string;
  age: number;
}

let ali: Person = { name: 'Ali', age: 30 };
```

## Optional Properties
```ts
interface Car {
  brand: string;
  model?: string; // optional
}
```

---

## Pro Tip
Use interfaces to define contracts for functions, classes, and objects.

---

**Next:** Practice interfaces in the exercise!
