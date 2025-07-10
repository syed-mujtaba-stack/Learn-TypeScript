# Day 14: Type Aliases & Literal Types

Type aliases let you create custom names for types. Literal types allow you to specify exact values a variable can have.

---

## Type Aliases
```ts
type ID = string | number;
let userId: ID = 123;
userId = 'abc';
```

## Literal Types
```ts
let direction: 'left' | 'right' | 'up' | 'down';
direction = 'left';
```

---

## Pro Tip
Use type aliases to simplify complex types and make code more readable.

---

**Next:** Practice type aliases and literals in the exercise!
