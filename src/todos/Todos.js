import React from "react";
import { observer } from "mobx-react-lite";

import { Card } from "antd";
import "antd/dist/antd.css";

import todoStore from "store";

const TodosList = ({ status }) => {
  return todoStore.filterTodosByStatus(status).map((todo) => (
    <Card
      title={todo.title}
      //   extra={<a href='#'>More</a>}
      style={{ width: 300 }}
      key={todo.id}
    >
      <input
        value={todo.content}
        onChange={(event) =>
          todoStore.updateTodoProperty(todo.id, "content", event.target.value)
        }
      />
    </Card>
  ));
};

export default observer(TodosList);
