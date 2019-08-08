import * as React from "react";
import * as ReactDOM from "react-dom";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import generateRandomColor from './utils';

type State = { tasks: Array<any> }; // can we do better?

class App extends React.Component <{}, State> {
  state = {
    tasks: [],
  };

  handleFormSubmit = (e, task) => {
    e.preventDefault();
    let itemToAdd = { task: task, color: generateRandomColor(new Date()) };
    this.setState(({ tasks }) => ({
      tasks: [...tasks, itemToAdd],
    }));
  }

  deleteTask = (idx) => {
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
