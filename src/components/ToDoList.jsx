import React from "react";
import type { ToDo } from '../index.js';

type Props = {|
  tasks: Array<ToDo>,
  deleteTask: Function,
|};

const ToDoList = ({ tasks, deleteTask }: Props) => (
  <ul>
    {tasks.map((item, idx) =>
      <li key={idx} style={{ marginBottom: '10px', color: item.color }} onClick={() => deleteTask(idx)} >
        {item.task}
      </li>
    )}
  </ul>
);

export default ToDoList;
