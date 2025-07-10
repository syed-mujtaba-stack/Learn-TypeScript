# Day 4: Enums in TypeScript

Enums allow you to define a set of named constants. They make your code more readable and less error-prone.

---

## What is an Enum?
- A way to give more friendly names to sets of numeric or string values.

## Numeric Enums
```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}
let move: Direction = Direction.Up;
```

## String Enums
```ts
enum Color {
  Red = 'RED',
  Green = 'GREEN',
  Blue = 'BLUE'
}
let favColor: Color = Color.Green;
```

---

## Pro Tip
Enums can be used in switch statements for clear, type-safe branching!

---

**Next:** Practice using enums in the exercise!
