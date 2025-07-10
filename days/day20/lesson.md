# Day 20: Mapped Types

Mapped types let you create new types by transforming properties of existing types.

---

## Example: Making Properties Optional
```ts
type Person = { name: string; age: number };
type PartialPerson = {
  [K in keyof Person]?: Person[K]
};
```

## Built-in Mapped Types
- `Partial<T>`: All properties optional
- `Required<T>`: All properties required
- `Readonly<T>`: All properties readonly

---

## Pro Tip
Mapped types are powerful for creating flexible APIs and utilities.

---

**Next:** Practice mapped types in the exercise!
