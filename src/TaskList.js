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
      removeTask
    } = this.props;

    return (
      <Container columns="col-md-6">
        <h2 className="h4">{title}</h2>
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
