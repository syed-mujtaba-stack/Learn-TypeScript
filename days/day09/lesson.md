# Day 9: Access Modifiers

Access modifiers control the visibility of class members, helping you encapsulate and protect data.

---

## Types of Access Modifiers
- `public`: Accessible from anywhere (default)
- `private`: Only accessible within the class
- `protected`: Accessible within the class and subclasses

## Example
```ts
class Example {
  public x: number;
  private y: number;
  protected z: number;
  constructor() {
    this.x = 1;
    this.y = 2;
    this.z = 3;
  }
}
```

---

## Pro Tip
Use `private` for sensitive data and `protected` for inheritance.

---

**Next:** Practice access modifiers in the exercise!
