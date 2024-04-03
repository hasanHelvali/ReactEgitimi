import TaskShow from "../TaskShow/task-show";
import './task-list.css';

function TaskList({tasks,onDelete,onUpdate}) {
    return( <div className="task-list">
        {tasks.map((task,index)=>{
            return <TaskShow key={index} task={task} onDelete={onDelete} onUpdate={onUpdate}/>
        })}     
    </div> 
    );
}

export default TaskList;
// {/* {tasks.map((task)=>{
//     return (
//         <TaskShow key={task.id} task={task} />
//     )
// })} */}