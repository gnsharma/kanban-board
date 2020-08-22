import React from "react";
import { observer, useLocalStore } from "mobx-react-lite";

import { Row, Col } from "antd";
import "antd/dist/antd.css";

import "utils/utils.css";
import "app/App.css";
import BoardColumn from "components/BoardColumn";
import createTodoStore from "store";

const todoStore = createTodoStore();

function App() {
  const appStore = useLocalStore(() => ({
    newTodosTitle: "To Do",
    wipTodosTitle: "In Progress",
    doneTodosTitle: "Done",
    updateBoardTitle(boardNameKey, newBoardName) {
      this[boardNameKey] = newBoardName;
    },
  }));

  return (
    <div id='app' className='px-10'>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={8}>
          <BoardColumn
            getTitle={() => appStore.newTodosTitle}
            boardNameKey='newTodosTitle'
            titleUpdater={appStore.updateBoardTitle}
            status='new'
            todoStore={todoStore}
          />
        </Col>
        <Col span={8}>
          <BoardColumn
            getTitle={() => appStore.wipTodosTitle}
            boardNameKey='wipTodosTitle'
            titleUpdater={appStore.updateBoardTitle}
            status='wip'
            todoStore={todoStore}
          />
        </Col>
        <Col span={8}>
          <BoardColumn
            getTitle={() => appStore.doneTodosTitle}
            boardNameKey='doneTodosTitle'
            titleUpdater={appStore.updateBoardTitle}
            status='done'
            todoStore={todoStore}
          />
        </Col>
      </Row>
    </div>
  );
}

export default observer(App);
