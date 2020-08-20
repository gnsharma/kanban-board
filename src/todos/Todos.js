import { observer, useLocalStore } from "mobx-react-lite";
import { Card } from "antd";
import React from "react";
import "antd/dist/antd.css";

const TodosList = observer(() => {
  const todoStore = useLocalStore(() => ({
    todos: [{ id: 213, title: "New Task", content: "test", status: "new" }],
    addTodo() {
      this.todos.append({
        id: Math.round(Math.random() * 1000000),
        title: `New Task`,
        content: "",
        status: "new",
      });
    },
    deleteTodo(todoId) {
      this.todos.splice(
        this.todos.findIndex((todo) => todo.id === todoId),
        1
      );
    },
    updateTodoTitle(todoId, newTitle) {
      this.todos.find((todo) => todo.id === todoId).title = newTitle;
    },
    updateTodoContent(todoId, newContent) {
      this.todos.find((todo) => todo.id === todoId).content = newContent;
    },
    changeTodoStatus(todoId, newStatus) {
      this.todos.find((todo) => todo.id === todoId).status = newStatus;
    },
  }));

  return todoStore.todos.map((todo) => (
    <Card
      title={todo.title}
      //   extra={<a href='#'>More</a>}
      style={{ width: 300 }}
      key={todo.id}
    >
      <input
        value={todo.content}
        onChange={(event) =>
          todoStore.updateTodoContent(todo.id, event.target.value)
        }
      />
    </Card>
  ));
});

export default TodosList;
