# Day 42: TypeScript Assertion Functions

Assertion functions let you tell TypeScript about types you know at runtime, improving type safety for custom checks.

---

## Basic Example
```ts
function assertString(val: any): asserts val is string {
  if (typeof val !== 'string') {
    throw new Error('Not a string!');
  }
}

let value: unknown = 'hello';
assertString(value);
console.log(value.toUpperCase());
```

---

## Pro Tip
Use assertion functions for runtime checks and type narrowing in complex codebases.

---

**Next:** Practice writing custom assertion functions in the exercise!
