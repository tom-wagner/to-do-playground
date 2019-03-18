import * as React from "react";
import { Task } from '../index';

export interface Props { handleFormSubmit: Function };
export interface State { task: string };


class Form extends React.Component <Props, State> {
  state = {
    task: '',
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ task: e.target.value });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>, task: string) => {
    this.props.handleFormSubmit(e, task);
    this.setState({ task: '' });
  }

  render() {
    const { task } = this.state;
    return (
      <form
        onSubmit={(e) => this.handleSubmit(e, task)}
        style={{ marginBottom: '15px' }}
      >
        <input
          type="text"
          name="task"
          value={task}
          onChange={this.handleChange}
          style={{ marginRight: '10px' }}
        />
        <input type="submit" name="submit" value="Add To Do" />
      </form>
    );
  }
}

export default Form;
