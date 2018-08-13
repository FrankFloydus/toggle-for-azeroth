import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import alliance_logo from "./images/Logo-alliance.png";
import React, { Component } from "react";
import data from "./data/data";
import percentages from "./data/percentages";
import { Link } from "react-router-dom";

import TaskList from "./TaskList";
import Alert from "./Alert";

class Alliance extends Component {
  state = {
    faction: "alliance",
    tasks: data.tasks,
    percentages: percentages,
    popup: true
  };

  componentDidMount = () => {
    const savedList = localStorage.getItem("list" + this.state.faction);
    const savedBars = localStorage.getItem("bars" + this.state.faction);
    const popup = localStorage.getItem("popup" + this.state.faction);

    popup && this.setState({ popup: JSON.parse(popup) });

    if (savedList && savedBars) {
      this.setState({
        tasks: JSON.parse(savedList),
        percentages: JSON.parse(savedBars)
      });
    }
  };

  componentDidUpdate = () => {
    localStorage.setItem(
      "list" + this.state.faction,
      JSON.stringify(this.state.tasks)
    );
    localStorage.setItem(
      "bars" + this.state.faction,
      JSON.stringify(this.state.percentages)
    );
    localStorage.setItem(
      "popup" + this.state.faction,
      JSON.stringify(this.state.popup)
    );
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
    const imgContained = {
      height: "55px"
    };

    return (
      <React.Fragment>
        <div className="container pb-5">
          {this.state.popup && <Alert dismiss={this.dismiss} />}

          {this.state.tasks && (
            <main>
              <div className="d-flex align-items-center mb-5">
                <img
                  style={imgContained}
                  className="img-fluid"
                  src={alliance_logo}
                />
                <h1 className="text-uppercase text-primary h2 font-weight-light ml-3">
                  {this.state.faction} version
                </h1>
                <Link to="/horde" class="badge badge-danger ml-3">
                  The horror! Switch to horde
                </Link>
              </div>
              <div className="row">
                <div className="col-md-4">
                  {" "}
                  <TaskList
                    title={"Primary Goals"}
                    subtitle={"Your long term goals"}
                    icon={"fab fa-accessible-icon"}
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
                    subtitle={"Tasks to do every day"}
                    icon={"fab fa-angellist"}
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
                    subtitle={"Tasks to do every week"}
                    icon={"fas fa-crosshairs"}
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
                    title={"Dungeons"}
                    subtitle={"Useful to track dungeons you did"}
                    icon={"fas fa-skull"}
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
                    title={"Zones"}
                    subtitle={"To track finished zones"}
                    icon={"fas fa-globe-americas"}
                    list={this.state.tasks}
                    toggleTask={this.toggleTask}
                    addTask={this.addTask}
                    removeTask={this.removeTask}
                    activeFilter={"zone"}
                    percentage={this.state.percentages.zone.percentage}
                    resetList={this.resetList}
                  />
                </div>
                <div className="col-md-4">
                  <TaskList
                    title={"Reputations"}
                    subtitle={"To track exalted reputations"}
                    icon={"fas fa-crown"}
                    list={this.state.tasks}
                    toggleTask={this.toggleTask}
                    addTask={this.addTask}
                    removeTask={this.removeTask}
                    activeFilter={"faction_alliance"}
                    percentage={
                      this.state.percentages.faction_alliance.percentage
                    }
                    resetList={this.resetList}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <TaskList
                    title={"War Campaign"}
                    subtitle={"Your war campaign progress"}
                    icon={"fas fa-gavel"}
                    list={this.state.tasks}
                    toggleTask={this.toggleTask}
                    addTask={this.addTask}
                    removeTask={this.removeTask}
                    activeFilter={"campaign_alliance"}
                    percentage={
                      this.state.percentages.campaign_alliance.percentage
                    }
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

export default Alliance;
