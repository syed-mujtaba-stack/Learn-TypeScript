// Day 30 Solution: TypeScript with the DOM

const solBtn30 = document.getElementById('greetBtn') as HTMLButtonElement;
solBtn30.addEventListener('click', () => {
  console.log('Hello, DOM!');
});
