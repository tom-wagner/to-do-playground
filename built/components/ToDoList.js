import * as React from "react";
const ToDoList = ({ tasks, deleteTask }) => (React.createElement("ul", null, tasks.map((item, idx) => React.createElement("li", { key: idx, style: { marginBottom: '10px', color: item.color }, onClick: () => deleteTask(idx) }, item.task))));
export default ToDoList;
//# sourceMappingURL=ToDoList.js.map