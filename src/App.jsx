import React, { useEffect, useState } from 'react';
import Head from './components/Head';
import AddTask from './components/AddTask';
import AllTask from './components/AllTask';

const App = () => {
  const [val, setval] = useState('');
  const [tasks, setTasks] = useState([]);

  const twoWay = (e) => setval(e.target.value);

  const add = () => {
    if (val.trim() !== '') {
      localStorage.setItem("a", val);
      setTasks([...tasks, val]);
      setval('');
    }
  };



  return (
    <>
      <Head />
      <div className="all h-[90%] w-[100%] flex">
        <AddTask twoWay={twoWay} val={val} add={add} />
        <AllTask tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
};

export default App;
