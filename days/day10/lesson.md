# Day 10: Readonly & Static

Learn how to use `readonly` and `static` for safer and more efficient classes in TypeScript.

---

## Readonly Properties
- Cannot be changed after initialization
```ts
class Book {
  readonly title: string;
  constructor(title: string) {
    this.title = title;
  }
}
```

## Static Properties & Methods
- Belong to the class, not instances
```ts
class MathUtils {
  static PI = 3.14;
  static square(x: number) {
    return x * x;
  }
}
console.log(MathUtils.PI);
console.log(MathUtils.square(5));
```

---

## Pro Tip
Use `readonly` for constants and `static` for utility methods.

---

**Next:** Practice readonly and static in the exercise!
