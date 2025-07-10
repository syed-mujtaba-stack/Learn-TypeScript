# Day 15: Type Assertions

Type assertions tell TypeScript to treat a value as a specific type.

---

## Type Assertion Syntax
```ts
let someValue: any = 'hello';
let strLength: number = (someValue as string).length;
```

## When to Use
- When you know more about the type than TypeScript does
- When working with DOM elements or third-party libraries

---

## Pro Tip
Use assertions carefully—they override TypeScript's type checking!

---

**Next:** Practice type assertions in the exercise!
