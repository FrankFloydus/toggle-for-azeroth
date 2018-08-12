import React, { Component } from "react";
import Task from "./Task";
import ProgressBar from "./ProgressBar";
import Container from "./Container";
import uuid from "uuid";

class TaskList extends Component {
  state = {
    percentage: 0
  };

  addTask = id => {
    const totalItems = this.props.list.filter(task => {
      return task.type === this.props.filter;
    });
    const percentage = 100 / totalItems.length;
    this.setState({
      percentage: this.state.percentage - percentage
    });
  };

  removeTask = id => {
    const totalItems = this.props.list.filter(task => {
      return task.type === this.props.filter;
    });
    const percentage = 100 / totalItems.length;
    this.setState({
      percentage: this.state.percentage + percentage
    });
  };

  render() {
    const { title, list, filter, toggleTask } = this.props;

    return (
      <Container columns="col-md-6">
        <h2 className="h4">{title}</h2>
        <ProgressBar percentage={this.state.percentage} />
        <ul>
          {list
            .filter(task => {
              return task.type === filter;
            })
            .map(item => {
              return (
                <Task
                  id={item.id}
                  name={item.goal}
                  isCompleted={item.isCompleted}
                  toggleTask={toggleTask}
                  addTask={this.addTask}
                  removeTask={this.removeTask}
                  updateStorage={item.updateStorage}
                />
              );
            })}
        </ul>
      </Container>
    );
  }
}

export default TaskList;
