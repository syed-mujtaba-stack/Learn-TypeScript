# Day 39: TypeScript Advanced Types - Conditional Types

Conditional types let you create types that depend on a condition. They’re powerful for building flexible APIs and libraries.

---

## Basic Conditional Type
```ts
type IsString<T> = T extends string ? true : false;
```

## Example Usage
```ts
type A = IsString<'hello'>; // true
type B = IsString<42>;      // false
```

---

## Pro Tip
Conditional types are often used with utility types and generics for advanced type logic.

---

**Next:** Practice conditional types in the exercise!
