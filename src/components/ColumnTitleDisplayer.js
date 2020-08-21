import React from "react";
import { observer } from "mobx-react-lite";

export default observer(function ColumnTitleDisplayer({
  getTitle,
  boardNameKey,
  titleUpdater,
}) {
  return (
    <input
      value={getTitle()}
      onChange={(event) => titleUpdater(boardNameKey, event.target.value)}
    />
  );
});
