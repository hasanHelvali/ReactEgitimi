import logo from './logo.svg';
import './App.css';
import Courses from './components/Courses';
import Loading from './components/Loading';
import { useEffect,useLayoutEffect,useState } from 'react';

function App() {
  const [courses, setcourses] = useState([])
  const [loading, setloading] = useState(true)
  useEffect(()=>{
    fetchCourse();
    /*Usaeeffect icinde calısan metot asenkron bir islem yurutecek oldugundan await iel beklenir. useEffect in kendisi ise asycn ile isaretlenir.
    Lakin normal sartlarda useeffect asenkron olarqak kullanılmaz. Bu yuzden icerisine asenkron yapıda calısan bir arrow func yapısını veridm.  */
  },[])//useeffect sadece sayfa yuklendiginde bir kez calısacak.

  const fetchCourse=async ()=>{
      setloading(true);      
      try {
      const response = await fetch("http://localhost:3000/courses/",{
        method:'GET',
        headers:{
          'Content-Type': 'application/json',
        }
      })
      // const response = await fetch("http://localhost:3000/courses/")
      const data=await response.json();
      setcourses(data);
      setloading(false);      
    } catch (error) {
      setloading(false);      
    }

  }

  const removeCourseById= (id)=>{
    const afterDeletedCourse=courses.filter((course)=>course.id!==id)
    setcourses(afterDeletedCourse)
    
  }








  return (
    <div className="App">
      {loading?(
        <Loading ></Loading>
      ):(
        <>
          {courses.length===0 ? (
            <div className='refreshDiv'>
              <h2>Kursların Hepsini Sildiniz.</h2>
              <div>
                <button className='btnDelete' onClick={()=>fetchCourse()}>Yenile  </button>
              </div>
            </div>
            ):(<Courses courses={courses} removeCourse={removeCourseById}></Courses>)
          }
        </>
      )}
    </div>
  );
}

export default App;
