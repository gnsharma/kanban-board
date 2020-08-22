import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { observer } from "mobx-react-lite";

import { Card, Button, Input } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const ItemTypes = {
  CARD: "card",
};

const DraggableCard = ({ todo, store }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop(item) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.id;
      const hoverIndex = todo.id;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Time to actually perform the action
      store.reorderTodo(dragIndex, hoverIndex);
    },
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id: todo.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div ref={ref}>
      <Card
        className='mt-10'
        title={
          <Input
            bordered={todo.title === "" ? true : false}
            value={todo.title}
            onChange={(event) =>
              store.updateTodoProperty(todo.id, "title", event.target.value)
            }
          />
        }
        style={{ opacity }}
        extra={
          <Button
            icon={<DeleteOutlined />}
            onClick={() => store.deleteTodo(todo.id)}
          />
        }
      >
        <textarea
          required
          value={todo.content}
          onChange={(event) =>
            store.updateTodoProperty(todo.id, "content", event.target.value)
          }
        />
      </Card>
    </div>
  );
};

export default observer(DraggableCard);
