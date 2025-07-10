# Day 31: TypeScript Modules (import/export)

Modules in TypeScript help organize code into reusable files. Learn how to use `export` and `import` for clean, maintainable projects.

---

## Exporting
```ts
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}
```

## Importing
```ts
// app.ts
import { add } from './math';
console.log(add(2, 3));
```

---

## Pro Tip
Use `export default` for a single main export per file, or named exports for multiple utilities.

---

**Next:** Practice modules with import/export in the exercise!
