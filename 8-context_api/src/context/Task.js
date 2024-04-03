//Task ile ilgilibazı degisken vs leri bu yapıdan yonetmek istedigim icin bu yapının adını task.js verdim.
import axios from "axios";
import { createContext, useState } from "react";  //createContext dahil edildi.



const TasksContext=createContext();//TaskContext uzerine alındı.

function Provider({children}){//provider adında bir fonksiyon tanımlanmıstır. children adında bir parametre alınır. 
  const [tasks , settasks ] = useState([])
  
  const createTask=async (title,area)=>{

    const result = await axios.post('http://localhost:3004/tasks',{
       title,
       area
     })
     const createdTask=[
       ...tasks,
       result.data
     ]
     settasks(createdTask)
   }

   const fetchTask=async()=>{
    const response=await axios.get('http://localhost:3004/tasks');
    settasks(response.data)
   }

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

  const sharedValuesAndMethods={
    tasks,
    createTask,
    fetchTask,
    editTaskById,
    deleteTaskById
  }
  return <TasksContext.Provider value={sharedValuesAndMethods}> {children} </TasksContext.Provider>
}
export {Provider}
export default TasksContext;


/*
Bu kod, bir React bağlamı (context) oluşturur ve bu bağlamı yönetmek için bir sağlayıcı (provider) bileşeni sağlar. Şimdi satır satır ne yaptığını açıklayalım:

    import { createContext } from "react";: React'ten createContext fonksiyonunu içe aktarır. Bu, bir bağlam oluşturmak için kullanılacak.

    const TasksContext = createContext();: createContext fonksiyonunu kullanarak bir bağlam oluşturur ve TasksContext adında bir değişkene atar. Bu bağlam, alt bileşenlere belirli bir değeri geçirmek için kullanılacak.

    function Provider({children}) { ... }: Provider adında bir bileşen tanımlar. Bu bileşen, içinde bulunan alt bileşenlere bağlamın değerini iletmek için kullanılacak. children adında bir prop alır, bu da bileşenin içindeki diğer bileşenlerdir.

    return (<TasksContext.Provider> {children} </TasksContext.Provider>);: Provider bileşeninin dönüş değeri, oluşturulan bağlamın sağlayıcısıdır. TasksContext.Provider, bağlamın sağlayıcısını temsil eder ve içinde bulunan children bileşenlerini sarmalar. Bu, alt bileşenlerin bağlamın değerine erişmesini sağlar.

    export {Provider}: Provider bileşenini dışa aktarır. Bu şekilde, bu bileşeni başka dosyalardan içe aktarabiliriz.

    export default TasksContext;: TasksContext bağlamını varsayılan olarak dışa aktarır. Bu, bu bağlamı başka dosyalardan içe aktardığımızda, bu dosyalarda kullanacağımız adı belirler.
     */