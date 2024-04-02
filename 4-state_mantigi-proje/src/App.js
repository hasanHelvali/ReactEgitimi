import './App.css';
import Course from './Course';
import {useState} from 'react';


function getRandomCourse(){
  const courseArr=['Angular','Bootstrap','CSharp','KompleWeb'];
  return courseArr[Math.floor(Math.random()*courseArr.length)]
  /*Burada yapılan islem sudur:
  Bir string dizisi var. Bu dizi icinde 0-3 indexlerinde 4 tane eleman var. 
  Math.random() fonksiyonu 0-1 arasında degerler uretir. courseArr.length ise 4 tur.
   Math.random()*courseArr.length dedigimiz zaman 0-3.99 arasında degerler uretmis oluruz. Bu uretilen degerleri de 
   Math.floor() ile alt tabandaki tam sayıya yuvarlıyoruz. Yani 0-1 arasında degerler elde edip bunları index olarak diziye verip 
   karsılık gelen elemanı return ediyoruz. Guzel bir algoritma...  */
}

function App() {
  const [courses,setCourses ] = useState([])//useState hook u kullanıldı. baslangıcta bos bir dizi tanımlandı.
  
  const handleClick=()=>{//her tıklamada calısacak arrow func 
    setCourses([...courses, getRandomCourse()]);
    /*
    ...courses ifadesi, spread operatörünü kullanarak bir dizi içindeki tüm öğeleri başka bir diziye kopyalamak için kullanılır. 
    Bu durumda, courses adlı bir dizinin tüm elemanları, yeni bir diziye kopyalanır.
    Yani dizi icindeki degerler alınır. getRandomCourse fonksiyonunda gelen yapıdaki degerle beraber setCourses calıstırılır. */
  }
  const courseList=courses.map((course,index)=>{
    return <Course key={index} courseName={course} />
  })

  return (
    <div className="App"> 
      <button className='appButton' onClick={handleClick}>Kurs Ekle</button>
      {/* {
       courses.map((course,index)=>{
         return <Course key={index} courseName={course} />
       }) 
      } */}

      <div className='courseList'>{courseList}</div>

    </div>
  );
}

export default App;
