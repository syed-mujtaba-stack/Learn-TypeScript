# Day 40: TypeScript Advanced Types - Infer Keyword

The `infer` keyword lets you declare a type variable within a conditional type. It’s useful for extracting types from complex structures.

---

## Basic Usage
```ts
type ElementType<T> = T extends (infer U)[] ? U : T;
```

## Example
```ts
type A = ElementType<number[]>; // number
type B = ElementType<string>;   // string
```

---

## Pro Tip
`infer` is powerful for building custom utility types and extracting types from functions or arrays.

---

**Next:** Practice using `infer` in the exercise!
