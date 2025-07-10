# Day 33: TypeScript Namespaces

Namespaces in TypeScript help organize and group related code within a single file or across multiple files. They reduce global scope pollution and clarify intent.

---

## Defining a Namespace
```ts
namespace MathUtils {
  export function square(x: number) {
    return x * x;
  }
}
```

## Using a Namespace
```ts
console.log(MathUtils.square(4)); // 16
```

---

## Pro Tip
Use namespaces for legacy or simple projects. For modern apps, prefer ES modules for better scalability.

---

**Next:** Practice using namespaces in the exercise!
