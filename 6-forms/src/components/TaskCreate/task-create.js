import { useState } from 'react';
import './task-create.css';

function TaskCreate({onCreate,task,isTaskFormUpdate,onUpdate}) {
    const [title, settitle] = useState(task?task.title:'')
    const [area, setarea] = useState(task?task.area:'')
    const submitForm=(event)=>{
        event.preventDefault();//sayfanın yenilenmemesini saglar.
        if(isTaskFormUpdate){
            onUpdate(task.id,title,area)
        }
        else{
            onCreate(title,area)
        }
        settitle("");
        setarea("");
    };
    return (
        <div>
            {isTaskFormUpdate?     
            <div className='taskUpdateDiv'>
                <h3>Lütfen Taskı Düzenleyiniz</h3>
                <form className="form" >
                    <label className='task-label'>Başlığı Düzenleyiniz</label>
                    <input value={title}  className='task-input' type="text" onChange={(event)=>{settitle(event.target.value)}} />
                    <label className='task-label'>Taskı Düzenleyiniz.</label>
                    <textarea className='task-input' rows={5} value={area} onChange={(event)=>{setarea(event.target.value)}}></textarea>
                    <button className='task-button update-button' onClick={submitForm}>Düzenle</button>
                </form>
            </div>
            :
            <div className='taskCreateDiv'>
                <h3>Lütfen Task Ekleyiniz</h3>
                <form className="form" >
                    <label className='task-label'>Başlık</label>
                    <input value={title}  className='task-input' type="text" onChange={(event)=>{settitle(event.target.value)}} />
                    <label className='task-label'>Task Giriniz</label>
                    <textarea className='task-input' rows={5} value={area} onChange={(event)=>{setarea(event.target.value)}}></textarea>
                    <button className='task-button' onClick={submitForm}>Oluştur</button>
                </form>
            </div>
            }
        </div>
    ) 
    
}
export default TaskCreate;