import React from "react";
import { Task } from '../index';

const ToDoList = ({ tasks, deleteTask }: { tasks: Array<Task>, deleteTask: Function }) => (
  <ul>
    {tasks.map((item, idx) =>
      <li key={idx} style={{ marginBottom: '10px', color: item.color }} onClick={() => deleteTask(idx)} >
        {item.task}
      </li>
    )}
  </ul>
);

export default ToDoList;
