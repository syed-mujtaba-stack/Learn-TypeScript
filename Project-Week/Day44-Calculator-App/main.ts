// Day 44: Calculator App (TypeScript)

const display = document.getElementById('display') as HTMLInputElement;
const buttons = document.querySelectorAll<HTMLButtonElement>('.buttons button[data-value]');
const clearBtn = document.getElementById('clear') as HTMLButtonElement;
const equalsBtn = document.getElementById('equals') as HTMLButtonElement;
const historyDiv = document.getElementById('history') as HTMLDivElement;
const calcThemeToggle = document.getElementById('theme-toggle') as HTMLButtonElement;

let current = '';
let calcHistory: string[] = [];

function updateDisplay() {
  display.value = current;
}

function addToHistory(expr: string, result: string) {
  calcHistory.unshift(`${expr} = ${result}`);
  if (calcHistory.length > 5) calcHistory.pop();
  historyDiv.innerHTML = calcHistory.map((h: string) => `<div>${h}</div>`).join('');
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    current += btn.dataset.value;
    updateDisplay();
  });
});

clearBtn.addEventListener('click', () => {
  current = '';
  updateDisplay();
});

equalsBtn.addEventListener('click', () => {
  try {
    // eslint-disable-next-line no-eval
    const result = eval(current);
    addToHistory(current, result);
    current = result.toString();
    updateDisplay();
  } catch {
    current = 'Error';
    updateDisplay();
    setTimeout(() => {
      current = '';
      updateDisplay();
    }, 1000);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key.match(/[0-9\+\-\*\/\.]/)) {
    current += e.key;
    updateDisplay();
  } else if (e.key === 'Enter') {
    equalsBtn.click();
  } else if (e.key === 'Backspace') {
    current = current.slice(0, -1);
    updateDisplay();
  } else if (e.key.toLowerCase() === 'c') {
    clearBtn.click();
  }
});

calcThemeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  calcThemeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
