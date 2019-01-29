// @flow
import React from "react";

class Form extends React.Component {
  state = {
    task: '',
  };

  handleChange = (e) => {
    this.setState({ task: e.target.value });
  }

  handleSubmit = (e, task) => {
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
