
import { useState } from 'react';
import './task-show.css';
import TaskCreate from '../TaskCreate/task-create';

function TaskShow({task,onDelete,onUpdate}) {
    const [isShowEdit,setIsShowEdit]=useState(false);
    const handleDeleteClick=()=>{
        onDelete(task.id)
    }
    const handleUpdateClick=()=>{
        setIsShowEdit(!isShowEdit);
    }
    const handleUpdateSubmit=(id,title,task)=>{
        setIsShowEdit(false);
        onUpdate(id,title,task)
    }
    return ( 
        <div className="task-show">
        
        {isShowEdit==true?
        (<>
             <TaskCreate task={task} isTaskFormUpdate={true} onUpdate={handleUpdateSubmit} ></TaskCreate>
        </>
        ):(
            <div>
                <h3 className='task-title'>Göreviniz</h3>
                <p>{task.title}</p>
                <h3 className='task-title'>Yapılacaklar</h3>
                <p>{task.area}</p>
                <div>
                    <button className='btnDelete' onClick={handleDeleteClick}>Sil</button>
                    <button className='btnEdit'onClick={handleUpdateClick}>Güncelle</button>
                </div>
            </div>
        )
        }
        
    </div>);
}

export default TaskShow;