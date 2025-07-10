# Day 35: TypeScript Decorators

Decorators are special annotations for classes and members. They enable meta-programming and are used in frameworks like Angular.

---

## Basic Class Decorator
```ts
function Logger(constructor: Function) {
  console.log('Class created:', constructor.name);
}

@Logger
class MyClass {}
```

## Property Decorator
```ts
function LogProp(target: any, key: string) {
  console.log('Property:', key);
}

class User {
  @LogProp
  name: string = '';
}
```

---

## Pro Tip
Enable `experimentalDecorators` in `tsconfig.json` to use decorators.

---

**Next:** Practice writing and applying decorators in the exercise!
