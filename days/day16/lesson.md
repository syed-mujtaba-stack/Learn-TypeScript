# Day 16: Nullable Types & Non-Null Assertion

TypeScript helps you handle `null` and `undefined` safely. The non-null assertion operator (`!`) tells TypeScript a value is not null or undefined.

---

## Nullable Types
```ts
let value: string | null = null;
value = 'hello';
```

## Non-Null Assertion
```ts
function printLength(str?: string) {
  console.log(str!.length); // Tells TS str is not null/undefined
}
```

---

## Pro Tip
Use non-null assertions only when you are sure the value is not null/undefined.

---

**Next:** Practice nullable types and non-null assertions in the exercise!
