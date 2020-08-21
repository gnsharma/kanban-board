import { observable } from "mobx";

const todoStore = observable({
  todos: [
    { id: 213, title: "New Task", content: "test task new", status: "new" },
    {
      id: 293,
      title: "In Progress Task",
      content: "test task in progress",
      status: "wip",
    },
    { id: 413, title: "Done Task", content: "test task done", status: "done" },
  ],
  addTodo(status) {
    this.todos.push({
      id: Math.round(Math.random() * 1000000),
      title: `New ${status} Task`,
      content: "",
      status,
    });
  },
  deleteTodo(todoId) {
    this.todos.splice(
      this.todos.findIndex((todo) => todo.id === todoId),
      1
    );
  },
  updateTodoProperty(todoId, propertyName, newPropertyValue) {
    this.todos.find((todo) => todo.id === todoId)[
      propertyName
    ] = newPropertyValue;
  },
  filterTodosByStatus(status) {
    return this.todos.filter((todo) => todo.status === status);
  },
});

export default todoStore;
