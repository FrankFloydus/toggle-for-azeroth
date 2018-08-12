import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { Component } from "react";
import data from "./data/data";
import percentages from "./data/percentages";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    tasks: data.tasks,
    percentages: {
      primary_task: {
        percentage: 0
      },
      daily_task: {
        percentage: 0
      },
      weekly_task: {
        percentage: 0
      },
      dungeon: {
        percentage: 0
      },
      zone: {
        percentage: 0
      }
    }
  };

  componentDidMount = () => {
    const savedList = localStorage.getItem("list");
    const savedBars = localStorage.getItem("bars");

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
  };

  removeTask = activeFilter => {
    const percentages = { ...this.state.percentages };
    const totalLength =
      100 / this.state.tasks.filter(task => task.type === activeFilter).length;
    percentages[activeFilter].percentage += totalLength;
  };

  render = () => {
    return (
      <div className="container p-5">
        <div
          class="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Toggle For Azeroth</strong> use the browser{" "}
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
            class="alert-link"
          >
            localStorage
          </a>{" "}
          to save your data; so, as long as you don't clear the cache you are
          all set!
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <h1>Toggle for Azeroth</h1>
        <p>
          Based on the{" "}
          <a
            target="_blank"
            href="https://docs.google.com/spreadsheets/d/1xHvIxX5TE0ZMYTKBzkaRNFQTJzYQJhhho8KuyK4CB0w/htmlview?sle=true#"
          >
            guide
          </a>{" "}
          written by <mark>Медифк, Ревущий Фьорд, Банхаммер</mark>,{" "}
          <strong>Bnet:</strong> Medivh#2545.
        </p>
        {this.state.tasks && (
          <div>
            <TaskList
              title={"Primary Goals"}
              list={this.state.tasks}
              toggleTask={this.toggleTask}
              addTask={this.addTask}
              removeTask={this.removeTask}
              activeFilter={"primary_task"}
              percentage={this.state.percentages.primary_task.percentage}
            />

            <TaskList
              title={"Daily Tasks"}
              list={this.state.tasks}
              toggleTask={this.toggleTask}
              addTask={this.addTask}
              removeTask={this.removeTask}
              activeFilter={"daily_task"}
              percentage={this.state.percentages.daily_task.percentage}
            />

            <TaskList
              title={"Weekly Tasks"}
              list={this.state.tasks}
              toggleTask={this.toggleTask}
              addTask={this.addTask}
              removeTask={this.removeTask}
              activeFilter={"weekly_task"}
              percentage={this.state.percentages.weekly_task.percentage}
            />

            <TaskList
              title={"Dungeons Tracker"}
              list={this.state.tasks}
              toggleTask={this.toggleTask}
              addTask={this.addTask}
              removeTask={this.removeTask}
              activeFilter={"dungeon"}
              percentage={this.state.percentages.dungeon.percentage}
            />

            <TaskList
              title={"Zone Tracker"}
              list={this.state.tasks}
              toggleTask={this.toggleTask}
              addTask={this.addTask}
              removeTask={this.removeTask}
              activeFilter={"zone"}
              percentage={this.state.percentages.zone.percentage}
            />
          </div>
        )}
      </div>
    );
  };
}

export default App;
