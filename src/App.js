import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { Component } from "react";
import data from "./data/data";
import percentages from "./data/percentages";

import Header from "./Header";
import TopBar from "./TopBar";
import TaskList from "./TaskList";
import Alert from "./Alert";

class App extends Component {
  state = {
    tasks: data.tasks,
    percentages: percentages,
    popup: true
  };

  componentDidMount = () => {
    const savedList = localStorage.getItem("list");
    const savedBars = localStorage.getItem("bars");
    const popup = localStorage.getItem("popup");

    popup && this.setState({ popup: JSON.parse(popup) });

    if (savedList && savedBars) {
      this.setState({
        tasks: JSON.parse(savedList),
        percentages: JSON.parse(savedBars)
      });
    }
  };

  componentDidUpdate = () => {
    localStorage.setItem("list", JSON.stringify(this.state.tasks));
    localStorage.setItem("bars", JSON.stringify(this.state.percentages));
    localStorage.setItem("popup", JSON.stringify(this.state.popup));
  };

  dismiss = () => {
    this.setState({
      popup: false
    });
  };

  resetList = activeFilter => {
    const tasks = [...this.state.tasks];
    const percentages = { ...this.state.percentages };
    percentages[activeFilter].percentage = 0;
    this.setState({
      tasks: tasks.map(item => {
        if (item.type === activeFilter) {
          return {
            ...item,
            isCompleted: false
          };
        } else {
          return item;
        }
      })
    });
  };

  toggleTask = id => {
    const tasks = [...this.state.tasks];
    this.setState({
      tasks: tasks.map(item => {
        if (id === item.id) {
          return {
            ...item,
            isCompleted: !item.isCompleted
          };
        } else {
          return item;
        }
      })
    });
  };

  addTask = activeFilter => {
    const percentages = { ...this.state.percentages };
    const totalLength =
      100 / this.state.tasks.filter(task => task.type === activeFilter).length;
    percentages[activeFilter].percentage -= totalLength;
    if (percentages[activeFilter].percentage < 0) {
      percentages[activeFilter].percentage = 0;
    }
  };

  removeTask = activeFilter => {
    const percentages = { ...this.state.percentages };
    const totalLength =
      100 / this.state.tasks.filter(task => task.type === activeFilter).length;
    percentages[activeFilter].percentage += totalLength;
    if (percentages[activeFilter].percentage > 100) {
      percentages[activeFilter].percentage = 100;
    }
  };

  render = () => {
    return (
      <React.Fragment>
        <TopBar />
        <div className="container p-5">
          {this.state.popup && <Alert dismiss={this.dismiss} />}

          <Header />
          {this.state.tasks && (
            <main>
              <div className="row">
                <div className="col-md-4">
                  {" "}
                  <TaskList
                    title={"Primary Goals"}
                    list={this.state.tasks}
                    toggleTask={this.toggleTask}
                    addTask={this.addTask}
                    removeTask={this.removeTask}
                    activeFilter={"primary_task"}
                    percentage={this.state.percentages.primary_task.percentage}
                    resetList={this.resetList}
                  />
                </div>
                <div className="col-md-4">
                  <TaskList
                    title={"Daily Tasks"}
                    list={this.state.tasks}
                    toggleTask={this.toggleTask}
                    addTask={this.addTask}
                    removeTask={this.removeTask}
                    activeFilter={"daily_task"}
                    percentage={this.state.percentages.daily_task.percentage}
                    resetList={this.resetList}
                  />
                </div>
                <div className="col-md-4">
                  {" "}
                  <TaskList
                    title={"Weekly Tasks"}
                    list={this.state.tasks}
                    toggleTask={this.toggleTask}
                    addTask={this.addTask}
                    removeTask={this.removeTask}
                    activeFilter={"weekly_task"}
                    percentage={this.state.percentages.weekly_task.percentage}
                    resetList={this.resetList}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <TaskList
                    title={"Dungeons Tracker"}
                    list={this.state.tasks}
                    toggleTask={this.toggleTask}
                    addTask={this.addTask}
                    removeTask={this.removeTask}
                    activeFilter={"dungeon"}
                    percentage={this.state.percentages.dungeon.percentage}
                    resetList={this.resetList}
                  />
                </div>
                <div className="col-md-4">
                  <TaskList
                    title={"Zone Tracker"}
                    list={this.state.tasks}
                    toggleTask={this.toggleTask}
                    addTask={this.addTask}
                    removeTask={this.removeTask}
                    activeFilter={"zone"}
                    percentage={this.state.percentages.zone.percentage}
                    resetList={this.resetList}
                  />
                </div>
              </div>
            </main>
          )}
        </div>
      </React.Fragment>
    );
  };
}

export default App;
