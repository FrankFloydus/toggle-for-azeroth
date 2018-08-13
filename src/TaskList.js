import React, { Component } from "react";
import Task from "./Task";
import ProgressBar from "./ProgressBar";
import Container from "./Container";

class TaskList extends Component {
  render() {
    const {
      title,
      list,
      activeFilter,
      toggleTask,
      percentage,
      addTask,
      removeTask,
      resetList,
      subtitle,
      icon
    } = this.props;

    return (
      <Container columns="col">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <i className={`${icon} text-success fa-lg`} />
            <h2 className="h4 m-0 ml-2">{title}</h2>
          </div>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => resetList(activeFilter)}
          >
            Clear
          </button>
        </div>
        <p className="mt-2 small">{subtitle}</p>
        <ProgressBar percentage={percentage} />
        <ul>
          {list
            .filter(task => {
              return task.type === activeFilter;
            })
            .map(item => {
              return (
                <Task
                  id={item.id}
                  name={item.goal}
                  isCompleted={item.isCompleted}
                  toggleTask={toggleTask}
                  addTask={addTask}
                  removeTask={removeTask}
                  activeFilter={activeFilter}
                />
              );
            })}
        </ul>
      </Container>
    );
  }
}

export default TaskList;
