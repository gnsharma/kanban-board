import React, { useRef } from "react";
import { useDrop } from "react-dnd";
import { observer } from "mobx-react-lite";

import { Card } from "antd";
import TodosList from "todos/Todos";
import ColumnTitleDisplayer from "components/ColumnTitleDisplayer";

const ItemTypes = {
  CARD: "card",
};

const DraggableCard = ({
  getTitle,
  boardNameKey,
  titleUpdater,
  status,
  todoStore,
}) => {
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop(item) {
      todoStore.updateTodoProperty(item.id, "status", status);
    },
  });

  return (
    <div ref={drop}>
      <Card>
        <ColumnTitleDisplayer
          getTitle={getTitle}
          boardNameKey={boardNameKey}
          titleUpdater={titleUpdater}
          addTodo={() => todoStore.addTodo(status)}
        />
        <TodosList status={status} store={todoStore} />
      </Card>
    </div>
  );
};

export default observer(DraggableCard);
