import React from "react";

type ToDoListProps = {
  tasks: any,
  deleteTask: any, 
};

const ToDoList = (props: ToDoListProps) => (
  <ul>
    {/*
      // @ts-ignore */}
    {props.tasks.map((item, idx) =>
      <li key={idx} style={{ marginBottom: '10px', color: item.color }} onClick={() => props.deleteTask(idx)} >
        {item.task}
      </li>
    )}
  </ul>
);

export default ToDoList;
