# Day 25: Optional Chaining & Nullish Coalescing

These modern TypeScript features help you write safer, cleaner code when dealing with nullable values.

---

## Optional Chaining (`?.`)
- Safely access nested properties
```ts
let user = { profile: { name: 'Ali' } };
console.log(user.profile?.name); // 'Ali'
console.log(user.address?.city); // undefined
```

## Nullish Coalescing (`??`)
- Provide a default value if null or undefined
```ts
let value = undefined;
console.log(value ?? 'default'); // 'default'
```

---

## Pro Tip
Use these features to avoid runtime errors with deeply nested or optional data.

---

**Next:** Practice optional chaining and nullish coalescing in the exercise!
