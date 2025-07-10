# Day 28: Working with Dates in TypeScript

TypeScript builds on JavaScript's Date object, adding type safety and better tooling. Learn how to create, manipulate, and format dates.

---

## Creating Dates
```ts
const now = new Date();
const birthday = new Date('1990-01-01');
```

## Getting & Setting Components
```ts
console.log(now.getFullYear());
now.setMonth(11); // December
```

## Formatting Dates
```ts
const formatted = now.toLocaleDateString();
console.log(formatted);
```

---

## Pro Tip
Use libraries like `date-fns` or `luxon` for advanced date manipulation in TypeScript projects.

---

**Next:** Practice date creation and formatting in the exercise!
