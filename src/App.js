
import React, { Component } from 'react';
import Overview from "./components/Overview";

class App extends Component {

  constructor() {
    super();

    this.state = {
      task: "",
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: "",
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="taskInput"> Insertar tarea </label>
            <input
              type="text"
              id="taskInput"
              className="form-control"
              value={task}
              onChange={this.handleChange}
            />
            <button type="submit" className="btn btn-primary">Añadir Tarea</button>
          </div>
        </form>
        <Overview tasks={tasks} />
      </>
    );
  }
}

export default App;
