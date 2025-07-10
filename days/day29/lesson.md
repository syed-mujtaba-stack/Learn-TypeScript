# Day 29: Working with JSON in TypeScript

JSON is a universal data format. TypeScript helps you parse, validate, and safely use JSON data.

---

## Parsing JSON
```ts
const jsonString = '{"name":"Ali","age":30}';
const obj = JSON.parse(jsonString);
console.log(obj.name);
```

## Stringifying Objects
```ts
const user = { name: 'Sara', age: 25 };
const str = JSON.stringify(user);
console.log(str);
```

---

## Pro Tip
Always validate the structure of parsed JSON before using it, especially with external data.

---

**Next:** Practice parsing and using JSON in the exercise!
