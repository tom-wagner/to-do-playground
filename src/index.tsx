import * as React from "react";
import * as ReactDOM from "react-dom";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import generateRandomColor from './utils';

export type Task = any;
type State = { tasks: any };

class App extends React.Component <{}, State> {
  state = {
    tasks: [],
  };

  handleFormSubmit = (e: any, task: any) => {
    e.preventDefault();
    
    const itemToAdd = { task: task, color: generateRandomColor() };
    
    this.setState((state, prevState) => ({
      tasks: [...state.tasks, itemToAdd],
    }));
  }

  deleteTask = (idx: any) => {
    this.setState((state, prevState) => ({
      tasks: [...state.tasks.slice(0, idx), ...state.tasks.slice(idx + 1)],
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
