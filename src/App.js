
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
<<<<<<< HEAD
    if (task.trim().length > 2) {
      setTasks([...tasks, task]);
      setTask("");
    } else {
      alert("La cago, escriba algo ñero");
    }
=======
    setTasks([...tasks, task]);
    setTask("");
>>>>>>> 9c00b5c460b031ec4a9d9d2308eb3f1aaff7ec1f
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


