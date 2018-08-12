import React, { Component } from "react";

class Task extends Component {
  render() {
    const {
      id,
      name,
      isCompleted,
      toggleTask,
      addTask,
      removeTask
    } = this.props;

    return isCompleted ? (
      <li
        onClick={() => {
          toggleTask(id);
          addTask();
        }}
      >
        <del> {name} </del>
      </li>
    ) : (
      <li
        onClick={() => {
          toggleTask(id);
          removeTask();
        }}
      >
        {name}
      </li>
    );
  }
}

export default Task;
