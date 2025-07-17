import React, { useEffect, useState } from 'react';
import Head from './components/Head';
import AddTask from './components/AddTask';
import AllTask from './components/AllTask';
import axios from 'axios';
const App = () => {
  const [val, setval] = useState('');
  const [tasks, setTasks] = useState([]);

  const twoWay = (e) => setval(e.target.value);

  const add = () => {
    if (val.trim() !== '') {
      setTasks([...tasks, val]);
      setval('');
    }
  };

const handleAdd = async () => {
  if (!val.trim()) return;
  try {
   await axios.post('http://localhost:3000', { task: val });
  } catch (err) {
    console.error("Error adding task", err);
  }
};

  


  return (
    <>
      <Head />
      <div className="all h-[90%] w-[100%] flex">
        <AddTask  twoWay={twoWay} val={val} add={add} handleAdd={handleAdd} />
        <AllTask tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
};

export default App;
