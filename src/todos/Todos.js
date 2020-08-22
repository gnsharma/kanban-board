import React from "react";
import { observer } from "mobx-react-lite";

import DraggableCard from "components/DraggableCard";

const TodosList = ({ status, store }) => {
  const filteredTodos = store.filterTodosByStatus(status);
  return filteredTodos.map((todo) => (
    <DraggableCard key={todo.id} todo={todo} store={store} />
  ));
};

export default observer(TodosList);
