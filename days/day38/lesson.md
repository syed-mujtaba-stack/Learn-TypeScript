# Day 38: TypeScript Symbols & Unique Symbols

Symbols are unique and immutable primitive values, useful for object property keys. TypeScript also supports `unique symbol` types for strict typing.

---

## Symbol Example
```ts
const sym1 = Symbol('id');
const sym2 = Symbol('id');
console.log(sym1 === sym2); // false
```

## Unique Symbol Type
```ts
const mySym: unique symbol = Symbol('key');
```

---

## Pro Tip
Use symbols for private/protected object keys and meta-programming.

---

**Next:** Practice using symbols in the exercise!
