# Day 34: TypeScript Mixins

Mixins allow you to compose multiple classes into one, promoting code reuse. TypeScript supports mixins via functions that return classes.

---

## Basic Mixin Example
```ts
class CanEat {
  eat() { console.log('Eating'); }
}
class CanWalk {
  walk() { console.log('Walking'); }
}
function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}
class Person {}
applyMixins(Person, [CanEat, CanWalk]);
const p = new Person();
(p as any).eat();
```

---

## Pro Tip
Mixins are powerful, but use them sparingly for cross-cutting concerns.

---

**Next:** Practice creating and using mixins in the exercise!
