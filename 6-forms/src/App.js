import {useState} from 'react';
import './App.css';
import TaskCreate from './components/TaskCreate/task-create';
import TaskList from './components/TaskList/task-list';

function App() {
  const [tasks , settasks ] = useState([])
  const createTask=(title,area)=>{
    const createdTask=[
      ...tasks,//eskiler kopyalanır, buraya yapıstırılır.yeni arraya eklenir.
      {
        id:Math.round(Math.random()*999999),
        title:title,
        area:area
      }//yeni array in uzeirne buradaki verler de eklenir.
    ]//artık yeni array im burası
    settasks(createdTask)//tekrardan diziyi yeni dizi ile degistiriyorum. Bu elde edilen verileri TaskList e prop olarak gondermem gerekiyor.
  }

   const deleteTaskById =(id)=>{
    const afterDeletingTasks = tasks.filter((task)=>{
      return task.id!==id
    })

    settasks(afterDeletingTasks )
  }

  const editTaskById =(id,updatedTitle,updatedTaskDesc)=>{
    const updatedTask = tasks.map((task)=>{
      if(task.id===id){
        // return task.id!==id
        return {
          id:id,
          title:updatedTitle,
          area:updatedTaskDesc
        }
      }
      return task;
    })
    settasks(updatedTask )
  }


  return (
    <div className="App">
        <TaskCreate onCreate={createTask}/>
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById}/>
    </div>
  );
}

export default App;
