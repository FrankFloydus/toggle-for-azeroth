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
      resetList
    } = this.props;

    return (
      <Container columns="col">
        <div className="d-flex justify-content-between">
          <h2 className="h4">{title}</h2>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => resetList(activeFilter)}
          >
            Reset
          </button>
        </div>

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
