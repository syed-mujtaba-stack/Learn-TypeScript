# Day 11: Generics (Basics)

Generics allow you to write flexible, reusable code while maintaining type safety.

---

## What are Generics?
- Generics let you create components that work with any data type.

## Example: Generic Function
```ts
function identity<T>(arg: T): T {
  return arg;
}
console.log(identity<string>('hello'));
console.log(identity<number>(42));
```

---

## Pro Tip
Use generics for functions, interfaces, and classes that should work with multiple types.

---

**Next:** Practice generics in the exercise!
