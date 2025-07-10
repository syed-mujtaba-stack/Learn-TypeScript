# Day 17: Type Guards

Type guards help you write code that safely handles multiple types.

---

## Using typeof
```ts
function printId(id: string | number) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}
```

## Using in and instanceof
```ts
interface Car { drive(): void; }
class Bike { ride() {} }
function move(vehicle: Car | Bike) {
  if ('drive' in vehicle) {
    vehicle.drive();
  } else if (vehicle instanceof Bike) {
    vehicle.ride();
  }
}
```

---

## Pro Tip
Type guards make your code safer and easier to read.

---

**Next:** Practice type guards in the exercise!
