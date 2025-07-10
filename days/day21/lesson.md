# Day 21: Utility Types (Partial, Required, Readonly, Pick, Omit)

TypeScript provides built-in utility types to transform and compose types easily.

---

## Common Utility Types
- `Partial<T>`: All properties optional
- `Required<T>`: All properties required
- `Readonly<T>`: All properties readonly
- `Pick<T, K>`: Select a subset of properties
- `Omit<T, K>`: Exclude a subset of properties

## Example
```ts
type User = { id: number; name: string; email?: string };
type UserPreview = Pick<User, 'id' | 'name'>;
type UserWithoutEmail = Omit<User, 'email'>;
```

---

## Pro Tip
Combine utility types for advanced type manipulations.

---

**Next:** Practice utility types in the exercise!
