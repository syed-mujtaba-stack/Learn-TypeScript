# Day 12: Generics (Advanced)

Take your generics skills further with constraints and multiple type parameters.

---

## Generic Constraints
- Restrict the kinds of types that can be used
```ts
function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}
logLength('hello');
logLength([1,2,3]);
```

## Multiple Type Parameters
```ts
function merge<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}
```

---

## Pro Tip
Use constraints to ensure generics are used safely.

---

**Next:** Practice advanced generics in the exercise!
