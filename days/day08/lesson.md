# Day 8: Classes & OOP Basics

TypeScript brings powerful object-oriented programming (OOP) features to JavaScript.

---

## Defining a Class
```ts
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}
```

## Creating Instances
```ts
let dog = new Animal('Dog');
dog.speak();
```

---

## Pro Tip
Use classes for reusable and organized code in large projects.

---

**Next:** Practice classes in the exercise!
