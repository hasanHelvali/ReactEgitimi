import logo from './logo.svg';
import {useState,useEffect} from 'react';
import TaskCreate from './TaskCreate/task-create'; 
import './App.css';
import TaskList from './TaskList/task-list';
import axios from 'axios';

function App() {
  /*Bu projede 
  json server adında bir kutuphane projeye yuklendi. Npm den ilgili talimatlara bakılabilir.
  Ardından en dısta bir api adında klasor acılarak icine ilgili verileri saklamak istedigimiz db.json dosyası ve 
  {
    tasks:[

    ]
  }
  seklindeki icerigi manuel olarak olusturuldu.

  json-server --watch api/db.json --port 3004
  komutu ile ilgili portta bir json server ayaga kaldırıldı.  
  Bu proje ise baska bir portta ayaga kaldırıldı. 
  Ardındna axios yuklendi.
  Burada bir backend e veya bir server a baglıymıs gibi verileri kaydedip aynı sekilde getirmeye vs calısalım.
   */



  const [tasks , settasks ] = useState([])
  const createTask=async (title,area)=>{

   const result = await axios.post('http://localhost:3004/tasks',{
      title,//bu aslında title:title demektir. key ve value aynı ise bu sekilde kısaltılabilir. 
      area
    })
    console.log(result);


    const createdTask=[
      ...tasks,//eskiler kopyalanır, buraya yapıstırılır.yeni arraya eklenir.
      // {
      //   id:Math.round(Math.random()*999999),
      //   title:title,
      //   area:area
      //   //yeni array in uzeirne buradaki verler de eklenir.
      // }
      result.data
      //Yukarıdaki objenin karsılıgı burada result ın data sında saklıdır.
    ]//artık yeni array im burası
    settasks(createdTask)//tekrardan diziyi yeni dizi ile degistiriyorum. Bu elde edilen verileri TaskList e prop olarak gondermem gerekiyor.
  }

  useEffect(async ()=>{
    const response = await axios.get('http://localhost:3004/tasks');
    settasks(response.data)
  },[])//sadece sayfa yenilendigiinde bir kere islem yapmak istedigim icin bos bir array ile useEffect i kullandım.
  
   const deleteTaskById =async (id)=>{
    await axios.delete(`http://localhost:3004/tasks/${id}`);
    const afterDeletingTasks = tasks.filter((task)=>{
      return task.id!==id
    })

    settasks(afterDeletingTasks )
  }

  const editTaskById =async (id,updatedTitle,updatedTaskDesc)=>{
    const response = await axios.put(`http://localhost:3004/tasks/${id}`,{
      title:updatedTitle,
      area:updatedTaskDesc
    });

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
