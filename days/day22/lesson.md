# Day 22: Type Narrowing

Type narrowing is how TypeScript refines types within a block of code, making your code safer and smarter.

---

## Examples
- Using typeof, instanceof, equality checks, and custom type guards
```ts
function printValue(val: string | number) {
  if (typeof val === 'string') {
    console.log('String:', val);
  } else {
    console.log('Number:', val);
  }
}
```

---

## Pro Tip
TypeScript automatically narrows types based on your checks—use this to avoid runtime errors.

---

**Next:** Practice type narrowing in the exercise!
