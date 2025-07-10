# Day 6: Functions & Type Annotations

Learn how to write functions with type-safe parameters and return values in TypeScript.

---

## Function Type Annotations
```ts
function add(a: number, b: number): number {
  return a + b;
}
```

## Optional and Default Parameters
```ts
function greet(name: string = 'Guest') {
  console.log('Hello, ' + name);
}
```

---

## Pro Tip
Always annotate function parameters and return types for clarity and safety.

---

**Next:** Practice writing typed functions in the exercise!
