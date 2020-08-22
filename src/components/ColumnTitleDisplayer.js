import React from "react";
import { observer } from "mobx-react-lite";

import { Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export default observer(function ColumnTitleDisplayer({
  getTitle,
  boardNameKey,
  titleUpdater,
  addTodo,
}) {
  return (
    <Input
      bordered={getTitle() === "" ? true : false}
      value={getTitle()}
      onChange={(event) => titleUpdater(boardNameKey, event.target.value)}
      suffix={
        <Button className='ml-10' icon={<PlusOutlined />} onClick={addTodo} />
      }
    />
  );
});
