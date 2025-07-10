# Day 37: TypeScript Generators & Iterators

Generators are special functions that can pause and resume, producing a sequence of values. Iterators are objects that define how to access items in a collection.

---

## Generator Example
```ts
function* counter() {
  yield 1;
  yield 2;
  yield 3;
}
for (const num of counter()) {
  console.log(num);
}
```

## Custom Iterator Example
```ts
const iterable = {
  *[Symbol.iterator]() {
    yield 'a';
    yield 'b';
  }
};
for (const val of iterable) {
  console.log(val);
}
```

---

## Pro Tip
Use generators for lazy sequences and complex iteration logic.

---

**Next:** Practice generators and iterators in the exercise!
