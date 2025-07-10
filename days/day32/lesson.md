# Day 32: TypeScript Declaration Files (`.d.ts`)

Declaration files let TypeScript understand the types of plain JavaScript code or external libraries. They provide type information without implementation.

---

## What is a Declaration File?
- A file ending with `.d.ts`, containing only type declarations.

## Example
```ts
// math.d.ts
export declare function add(a: number, b: number): number;
```

## Usage
- Used when consuming JS libraries without TypeScript types.
- Many npm packages provide their own or use DefinitelyTyped (`@types/*`).

---

## Pro Tip
Write your own `.d.ts` files for custom JavaScript code you want to use with TypeScript.

---

**Next:** Practice creating and using declaration files in the exercise!
