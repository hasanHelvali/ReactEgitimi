import './App.css';
import {useEffect,useContext} from 'react';
import TaskContext from './context/Task';
import TaskCreate from './TaskCreate/task-create';
import TaskList from './TaskList/task-list';

function App() {

  const {fetchTask}=useContext(TaskContext)

  useEffect(()=>{
    fetchTask();
  },[])

  return (
    <div className="App">
        <TaskCreate />
      <h1>Görevler</h1>
      <TaskList />
    </div>
  );


 
}

export default App;