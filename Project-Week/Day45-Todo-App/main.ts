// Day 45: To-Do List App (TypeScript)

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const todoForm = document.getElementById('todo-form') as HTMLFormElement;
const todoInput = document.getElementById('todo-input') as HTMLInputElement;
const todoList = document.getElementById('todo-list') as HTMLUListElement;
const filterButtons = document.querySelectorAll<HTMLButtonElement>('.filters button');
const todoThemeToggle = document.getElementById('theme-toggle') as HTMLButtonElement;

let todos: Todo[] = JSON.parse(localStorage.getItem('todos-ts') || '[]');
let filter: 'all' | 'active' | 'completed' = 'all';

function saveTodos() {
  localStorage.setItem('todos-ts', JSON.stringify(todos));
}

function renderTodos() {
  todoList.innerHTML = '';
  const filtered = todos.filter(todo =>
    filter === 'all' ? true : filter === 'active' ? !todo.completed : todo.completed
  );
  filtered.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = todo.text;
    if (todo.completed) li.classList.add('completed');
    li.addEventListener('click', () => toggleTodo(todo.id));
    const delBtn = document.createElement('button');
    delBtn.textContent = '✕';
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteTodo(todo.id);
    });
    li.appendChild(delBtn);
    todoList.appendChild(li);
  });
}

function addTodo(text: string) {
  const todo: Todo = { id: Date.now(), text, completed: false };
  todos.push(todo);
  saveTodos();
  renderTodos();
}

function toggleTodo(id: number) {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  saveTodos();
  renderTodos();
}

function deleteTodo(id: number) {
  todos = todos.filter(todo => todo.id !== id);
  saveTodos();
  renderTodos();
}

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (todoInput.value.trim()) {
    addTodo(todoInput.value.trim());
    todoInput.value = '';
  }
});

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filter = btn.dataset.filter as 'all' | 'active' | 'completed';
    renderTodos();
  });
});

todoThemeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  todoThemeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

renderTodos();
