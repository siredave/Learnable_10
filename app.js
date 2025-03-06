// Implement the TodoList class
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todos = [];
        this.nextId = 1;
    }
    // Add a new todo item
    TodoList.prototype.addTodo = function (task, dueDate) {
        var newTodo = {
            id: this.nextId++,
            task: task,
            completed: false,
            dueDate: dueDate,
        };
        this.todos.push(newTodo);
        console.log("Added: \"".concat(task, "\" (Due: ").concat(dueDate.toDateString(), ")"));
    };
    // Mark a todo as completed
    TodoList.prototype.completeTodo = function (id) {
        var todo = this.todos.find(function (t) { return t.id === id; });
        if (!todo) {
            console.error("Todo not found!");
            return;
        }
        todo.completed = true;
        console.log("Completed: \"".concat(todo.task, "\""));
    };
    // Remove a todo by ID
    TodoList.prototype.removeTodo = function (id) {
        var index = this.todos.findIndex(function (t) { return t.id === id; });
        if (index === -1) {
            console.error("Todo not found!");
            return;
        }
        var removed = this.todos.splice(index, 1);
        console.log("Removed: \"".concat(removed[0].task, "\""));
    };
    // List all todos
    TodoList.prototype.listTodos = function () {
        console.log("Todo List:");
        this.todos.forEach(function (todo) {
            console.log("ID: ".concat(todo.id, ", Task: ").concat(todo.task, ", Completed: ").concat(todo.completed, ", Due: ").concat(todo.dueDate.toDateString()));
        });
        return this.todos;
    };
    // Filter todos by completion status
    TodoList.prototype.filterTodos = function (completed) {
        return this.todos.filter(function (todo) { return todo.completed === completed; });
    };
    // Update a todo task description
    TodoList.prototype.updateTodo = function (id, newTask) {
        var todo = this.todos.find(function (t) { return t.id === id; });
        if (!todo) {
            console.error("Todo not found!");
            return;
        }
        todo.task = newTask;
        console.log("Updated Todo (ID: ".concat(id, ") to: \"").concat(newTask, "\""));
    };
    // Clear all completed todos
    TodoList.prototype.clearCompleted = function () {
        this.todos = this.todos.filter(function (todo) { return !todo.completed; });
        console.log("Cleared all completed todos.");
    };
    return TodoList;
}());
// Usage Example
var myTodoList = new TodoList();
myTodoList.addTodo("Learn TypeScript", new Date("2025-03-10"));
myTodoList.addTodo("Complete project", new Date("2025-03-15"));
myTodoList.listTodos();
myTodoList.completeTodo(1);
myTodoList.listTodos();
myTodoList.updateTodo(2, "Submit final project");
myTodoList.removeTodo(1);
myTodoList.clearCompleted();
myTodoList.listTodos();
