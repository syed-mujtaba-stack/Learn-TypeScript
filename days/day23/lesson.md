# Day 23: Index Signatures

Index signatures let you define types for objects with dynamic property names.

---

## Example
```ts
interface StringArray {
  [index: number]: string;
}
let arr: StringArray = ['a', 'b', 'c'];

interface Dictionary {
  [key: string]: number;
}
let scores: Dictionary = { Ali: 90, Sara: 85 };
```

---

## Pro Tip
Use index signatures for flexible objects like dictionaries and arrays.

---

**Next:** Practice index signatures in the exercise!
