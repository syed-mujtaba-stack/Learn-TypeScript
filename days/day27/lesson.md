# Day 27: Error Handling (try/catch, custom errors)

TypeScript lets you handle errors safely using try/catch and custom error classes.

---

## try/catch Example
```ts
try {
  throw new Error('Something went wrong');
} catch (err) {
  console.error(err);
}
```

## Custom Error Classes
```ts
class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CustomError';
  }
}
throw new CustomError('Oops!');
```

---

## Pro Tip
Always handle errors gracefully and provide helpful messages.

---

**Next:** Practice error handling in the exercise!
