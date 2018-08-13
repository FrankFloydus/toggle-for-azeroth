import React, { Component } from "react";

class Task extends Component {
  render() {
    const {
      id,
      name,
      isCompleted,
      toggleTask,
      addTask,
      removeTask,
      activeFilter
    } = this.props;

    return isCompleted ? (
      <li
        className="disabled main-link mb-2 mb-md-0"
        onClick={() => {
          toggleTask(id);
          addTask(activeFilter);
        }}
      >
        <del> {name} </del>
      </li>
    ) : (
      <li
        className="main-link mb-2 mb-md-0"
        onClick={() => {
          toggleTask(id);
          removeTask(activeFilter);
        }}
      >
        {name}
      </li>
    );
  }
}

export default Task;
