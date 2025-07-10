# Day 26: Promises & Async/Await

TypeScript supports modern async programming with Promises and async/await.

---

## Promises
```ts
function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Data loaded!'), 1000);
  });
}
```

## Async/Await
```ts
async function load() {
  const data = await fetchData();
  console.log(data);
}
load();
```

---

## Pro Tip
Use async/await for cleaner, more readable asynchronous code.

---

**Next:** Practice Promises and async/await in the exercise!
