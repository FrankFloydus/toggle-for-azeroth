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
        onClick={() => {
          toggleTask(id);
          addTask(activeFilter);
        }}
      >
        <del> {name} </del>
      </li>
    ) : (
      <li
        className="disabled"
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
