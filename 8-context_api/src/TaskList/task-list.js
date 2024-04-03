import TaskShow from '../TaskShow/task-show'
import './task-list.css';
import TasksContext from '../context/Task';
import {useContext} from 'react';

function TaskList() {
    const {tasks}=useContext(TasksContext)
    return( 
    <div className="task-list">
        {tasks.map((task,index)=>{
            return <TaskShow key={index} task={task}/>
        })}     

    </div> 
    );
}

export default TaskList;