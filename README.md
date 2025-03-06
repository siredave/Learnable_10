# Todo List Application (TypeScript)

## Overview
This is a simple **Todo List** application implemented in **TypeScript**. It allows users to:
- Add a todo item with a **due date**
- Mark a todo as **completed**
- Remove a todo
- List all todos
- Filter todos based on completion status
- Update a todo's task description
- Clear all completed todos

## Technologies Used
- TypeScript
- Node.js (for execution)

## TodoItem Interface
Defines the structure of a todo item:
```typescript
interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
  dueDate: Date;
}
```

## TodoList Class
Manages an array of todo items and provides necessary methods.

### Methods

#### `addTodo(task: string, dueDate: Date): void`
Adds a new todo item.

#### `completeTodo(id: number): void`
Marks a todo item as completed.

#### `removeTodo(id: number): void`
Removes a todo item.

#### `listTodos(): TodoItem[]`
Lists all todo items.

#### `filterTodos(completed: boolean): TodoItem[]`
Filters todos based on their completion status.

#### `updateTodo(id: number, newTask: string): void`
Updates a todo item’s task description.

#### `clearCompleted(): void`
Removes all completed todos.

## Usage Example
```typescript
const myTodoList = new TodoList();
myTodoList.addTodo("Learn TypeScript", new Date("2025-03-10"));
myTodoList.addTodo("Complete project", new Date("2025-03-15"));
myTodoList.listTodos();

myTodoList.completeTodo(1);
myTodoList.listTodos();

myTodoList.updateTodo(2, "Submit final project");
myTodoList.removeTodo(1);

myTodoList.clearCompleted();
myTodoList.listTodos();
```

## Installation & Execution
1. **Install TypeScript** (if not installed):
   ```bash
   npm install -g typescript
   ```
2. **Create a new TypeScript file (e.g., `todo.ts`)** and copy the above code.
3. **Compile the TypeScript file:**
   ```bash
   tsc todo.ts
   ```
4. **Run the generated JavaScript file:**
   ```bash
   node todo.js
   ```

## Features Implemented
✅ Strongly typed using TypeScript
✅ Error handling for missing todos
✅ Encapsulated `todos` array
✅ Readable and maintainable code
✅ Due date support for tasks

## License
This project is open-source and free to use.

