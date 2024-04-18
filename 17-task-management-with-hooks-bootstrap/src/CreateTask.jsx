import React, { useState } from 'react'

export default function CreateTask(props) {
    const [task, setTask] = useState({
        title:'',
        content:''
    });

    function detectChanges(event){
        const {name,value}=event.target;
        // console.log(event.target.value)
        setTask((prevTask)=>{
            return{
                ...prevTask,
                [name]:value
                //her girilen degerle beraber eski degerlerin tamamını da geri getırmek icin yaptıgımız bir operasyondur.
            }
        })
    }

    function submitTask(event){
        props.onAdd(task)//Bunu aslında appjs deki CreateTask e yollar.
        setTask({
            title:'',
            content:''//sonra degerleri sıfırlar
        })
        event.preventDefault();
        //formun sayfayı yenilemesi engellenir.
    }
    return (
    <div className='toDoDiv'>
        <form className='toDoForm'>
            <input type="text" className='form-control toDoInput mb-3' name='title' placeholder='Baslık' value={task.title} onChange={detectChanges}/>
            <textarea name="content" rows={3} placeholder='İşinizi Yazınız' className='form-control toDoInput mb-3' value={task.content} onChange={detectChanges}></textarea>
            <button className='btn btn-primary toDoButton' onClick={submitTask}>Ekle</button>
        </form>
    </div>
  )
}

// export default CreateTask

/*Her klavyeden girilen giriste detectChanges tetiklenir. Bunun sonucunda eskid egerlerle beraber task guncellenir. submit e tıklandıgında App.js e props gecilir.
Ilgili degerlr app.js de elde edilmis olurlar. */