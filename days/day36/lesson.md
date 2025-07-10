# Day 36: TypeScript Abstract Classes

Abstract classes define a blueprint for other classes. They can include abstract methods (no implementation) and regular methods.

---

## Abstract Class Example
```ts
abstract class Animal {
  abstract makeSound(): void;
  move() { console.log('Moving'); }
}

class Dog extends Animal {
  makeSound() { console.log('Woof!'); }
}

const dog = new Dog();
dog.makeSound();
dog.move();
```

---

## Pro Tip
Abstract classes cannot be instantiated directly. Use them for shared contracts and partial implementations.

---

**Next:** Practice with abstract classes in the exercise!
