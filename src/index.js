// @flow
import React from "react";
import ReactDOM from "react-dom";
import Form from "./components/Form.jsx";
import ToDoList from "./components/ToDoList.jsx";
import generateRandomColor from './utils';

export type ToDo = {|
  task: string,
  color: string,
|};

type State = {|
  tasks: Array<ToDo>,
|};

class App extends React.Component <{}, State> {
  state = {
    tasks: []
  };

  handleFormSubmit = (e: SyntheticEvent<HTMLButtonElement>, task: string) => {
    e.preventDefault();
    const itemToAdd = { task: task, color: generateRandomColor(new Date()) };
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

const root = document.getElementById('root')
if (root !== null) {
  ReactDOM.render(<App /> , root)
}

// OR:

// $FlowFixMe
// ReactDOM.render(<App /> , root)
