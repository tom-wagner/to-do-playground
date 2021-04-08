import React from "react";
import { Task } from '../index';

const ToDoList = (props: { tasks: Array<Task>, deleteTask: (idx: number) => void }) => (
  <ul>
    {props.tasks.map((item, idx) =>
      <li key={idx} style={{ marginBottom: '10px', color: item.color }} onClick={() => props.deleteTask(idx)} >
        {item.task}
      </li>
    )}
  </ul>
);

export default ToDoList;
