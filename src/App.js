
import React, { useState } from 'react'
import Overview from './components/Overview';

function App() {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);


  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="taskInput"> Escriba algo </label>
        <input
          type="text"
          value={task}
          onChange={handleChange}
          id="algo"
        />
        <button type="submit"> Añadir </button>
      </form>
      <Overview tasks={tasks} />
    </>
  );
}

export default App;


