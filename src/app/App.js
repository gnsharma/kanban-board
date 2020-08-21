import React from "react";
import { observer, useLocalStore } from "mobx-react-lite";

import { Row, Col, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

import TodosList from "todos/Todos";
import ColumnTitleDisplayer from "components/ColumnTitleDisplayer";
import todoStore from "store";

function App() {
  const appStore = useLocalStore(() => ({
    newTodosTitle: "New",
    wipTodosTitle: "In Progress",
    doneTodosTitle: "Done",
    updateBoardTitle(boardNameKey, newBoardName) {
      this[boardNameKey] = newBoardName;
    },
  }));

  return (
    <div id='app'>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={8}>
          <ColumnTitleDisplayer
            getTitle={() => appStore.newTodosTitle}
            boardNameKey='newTodosTitle'
            titleUpdater={appStore.updateBoardTitle}
          />
          <Button
            icon={<PlusOutlined />}
            onClick={() => todoStore.addTodo("new")}
          />
          <TodosList status='new' />
        </Col>
        <Col span={8}>
          <ColumnTitleDisplayer
            getTitle={() => appStore.wipTodosTitle}
            boardNameKey='wipTodosTitle'
            titleUpdater={appStore.updateBoardTitle}
          />
          <Button
            icon={<PlusOutlined />}
            onClick={() => todoStore.addTodo("wip")}
          />
          <TodosList status='wip' />
        </Col>
        <Col span={8}>
          <ColumnTitleDisplayer
            getTitle={() => appStore.doneTodosTitle}
            boardNameKey='doneTodosTitle'
            titleUpdater={appStore.updateBoardTitle}
          />
          <Button
            icon={<PlusOutlined />}
            onClick={() => todoStore.addTodo("done")}
          />
          <TodosList status='done' />
        </Col>
      </Row>
    </div>
  );
}

export default observer(App);
