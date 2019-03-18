import * as React from "react";
import * as ReactDOM from "react-dom";
import Form from "./components/Form.js";
import ToDoList from "./components/ToDoList.js";
import generateRandomColor from './utils';
import { string } from "prop-types";

export interface State { tasks: Array<Task> };
export interface Task { task: string, color: string };

class App extends React.Component <{},State> {
  state = {
    tasks: [] as Array<Task> // TODO: Read about this syntax
  };

  handleFormSubmit = (e: React.FormEvent<HTMLInputElement>, task: string) => {
    e.preventDefault();
    let itemToAdd = { task: task, color: generateRandomColor(new Date()) };
    this.setState(({ tasks }) => ({
      tasks: [...tasks, itemToAdd],
    }));
  }

  deleteTask = (idx: number) => {
    this.setState(({ tasks }) => ({
      tasks: [...tasks.slice(0, idx), ...tasks.slice(idx + 1)],
    }));
  }

  render() {
    return (
      <div className="App">
        <Form handleFormSubmit={this.handleFormSubmit} />
        <ToDoList tasks={this.state.tasks} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
