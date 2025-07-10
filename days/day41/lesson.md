# Day 41: TypeScript Template Literal Types

Template literal types let you create string types using pattern-based syntax, similar to JavaScript template literals.

---

## Basic Example
```ts
type Greeting = `Hello, ${string}`;
const greet: Greeting = 'Hello, World';
```

## Combining with Unions
```ts
type Theme = `theme-${'light' | 'dark'}`;
const mode: Theme = 'theme-dark';
```

---

## Pro Tip
Template literal types are great for enforcing naming conventions and generating string unions.

---

**Next:** Practice template literal types in the exercise!
