# Day 30: TypeScript with the DOM

TypeScript makes DOM manipulation safer and more robust with type checking for HTML elements and events.

---

## Accessing DOM Elements
```ts
const input = document.getElementById('myInput') as HTMLInputElement;
input.value = 'Hello!';
```

## Adding Event Listeners
```ts
const btn = document.getElementById('myBtn') as HTMLButtonElement;
btn.addEventListener('click', (e: MouseEvent) => {
  alert('Clicked!');
});
```

---

## Pro Tip
Always use the correct HTML element type (e.g., `HTMLInputElement`) for type safety.

---

**Next:** Practice DOM manipulation in the exercise!
