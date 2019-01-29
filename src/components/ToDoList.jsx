// @flow
import React from "react";

const ToDoList = ({ tasks, deleteTask }) => (
  <ul>
    {tasks.map((item, idx) =>
      <li key={idx} style={{ marginBottom: '10px', color: item.color }} onClick={() => deleteTask(idx)} >
      {item.task}
      </li>
    )}
  </ul>
);

export default ToDoList;
