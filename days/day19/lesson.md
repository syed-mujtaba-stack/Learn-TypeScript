# Day 19: keyof & typeof Operators

TypeScript provides operators to work with types dynamically: `keyof` and `typeof`.

---

## keyof Operator
- Gets all property names of a type as a union of string literals
```ts
interface User { id: number; name: string; }
type UserKeys = keyof User; // 'id' | 'name'
```

## typeof Operator
- Gets the type of a variable or object
```ts
let obj = { x: 1, y: 'hi' };
type ObjType = typeof obj; // { x: number; y: string; }
```

---

## Pro Tip
Use these operators for advanced type manipulations and utility types.

---

**Next:** Practice keyof and typeof in the exercise!
