import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { Component } from "react";
import data from "./data/data";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    faction: "horde",
    tasks: data.tasks
  };

  componentDidMount = () => {
    const check = localStorage.getItem("tasks");
    if (check) {
      const tasks = JSON.parse(check);
      this.setState({
        tasks
      });
    }
  };

  componentDidUpdate = () => {
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
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
              filter={"primary_task"}
            />

            <TaskList
              title={"Daily Tasks"}
              list={this.state.tasks}
              toggleTask={this.toggleTask}
              filter={"daily_task"}
            />

            <TaskList
              title={"Weekly Tasks"}
              list={this.state.tasks}
              toggleTask={this.toggleTask}
              filter={"weekly_task"}
            />

            <TaskList
              title={"Dungeons Tracker"}
              list={this.state.tasks}
              toggleTask={this.toggleTask}
              filter={"dungeon"}
            />

            <TaskList
              title={"Zone Tracker"}
              list={this.state.tasks}
              toggleTask={this.toggleTask}
              filter={"zone"}
            />
          </div>
        )}
      </div>
    );
  };
}

export default App;
