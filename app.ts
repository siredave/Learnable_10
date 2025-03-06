// Define the TodoItem interface
interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate: Date;
  }
  
  // Implement the TodoList class
  class TodoList {
    private todos: TodoItem[] = [];
    private nextId: number = 1;
  
    // Add a new todo item
    addTodo(task: string, dueDate: Date): void {
      const newTodo: TodoItem = {
        id: this.nextId++,
        task,
        completed: false,
        dueDate,
      };
      this.todos.push(newTodo);
      console.log(`Added: "${task}" (Due: ${dueDate.toDateString()})`);
    }
  
    // Mark a todo as completed
    completeTodo(id: number): void {
      const todo = this.todos.find((t) => t.id === id);
      if (!todo) {
        console.error("Todo not found!");
        return;
      }
      todo.completed = true;
      console.log(`Completed: "${todo.task}"`);
    }
  
    // Remove a todo by ID
    removeTodo(id: number): void {
      const index = this.todos.findIndex((t) => t.id === id);
      if (index === -1) {
        console.error("Todo not found!");
        return;
      }
      const removed = this.todos.splice(index, 1);
      console.log(`Removed: "${removed[0].task}"`);
    }
  
    // List all todos
    listTodos(): TodoItem[] {
      console.log("Todo List:");
      this.todos.forEach((todo) => {
        console.log(
          `ID: ${todo.id}, Task: ${todo.task}, Completed: ${todo.completed}, Due: ${todo.dueDate.toDateString()}`
        );
      });
      return this.todos;
    }
  
    // Filter todos by completion status
    filterTodos(completed: boolean): TodoItem[] {
      return this.todos.filter((todo) => todo.completed === completed);
    }
  
    // Update a todo task description
    updateTodo(id: number, newTask: string): void {
      const todo = this.todos.find((t) => t.id === id);
      if (!todo) {
        console.error("Todo not found!");
        return;
      }
      todo.task = newTask;
      console.log(`Updated Todo (ID: ${id}) to: "${newTask}"`);
    }
  
    // Clear all completed todos
    clearCompleted(): void {
      this.todos = this.todos.filter((todo) => !todo.completed);
      console.log("Cleared all completed todos.");
    }
  }
  
  // Usage Example
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
  