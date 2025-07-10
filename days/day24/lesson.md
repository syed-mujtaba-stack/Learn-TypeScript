# Day 24: Function Overloads

Function overloads let you define multiple signatures for a single function, making your APIs flexible and type-safe.

---

## Example
```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

console.log(add(1, 2));      // 3
console.log(add('a', 'b'));  // 'ab'
```

---

## Pro Tip
Use overloads for functions that work with multiple types, like libraries and utilities.

---

**Next:** Practice function overloads in the exercise!
