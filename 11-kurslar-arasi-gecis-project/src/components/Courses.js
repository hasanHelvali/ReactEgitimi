import React from 'react'
import { useState } from 'react';
import {FaChevronRight, FaChevronLeft} from "react-icons/fa"

export const Courses = ({courses,removeCourse}) => {

  const [index, setindex] = useState(0)
  const {content,title,price}=courses[index];
  
  const prewCourse = ()=>{
    setindex(()=>{
      let newIndex=index-1;
      return checkIndex(newIndex)
    })
  }
  const checkIndex=(index)=>{
    if(index<0){
      return courses.length-1
    }
    else if(index>courses.length-1){
      return 0;
    }
    return index
  }

  const nextCourse = ()=>{
    setindex(()=>{
      let newIndex=index+1;
      return checkIndex(newIndex)
    })
  }

  const getRandomCourse =()=>{
    let _index = Math.floor(Math.random()*courses.length)//5 elemanlı bir koleksiyon gelecekse bana 0-4 aralıgında random sayılar uretilir.
    
    setindex(checkIndex(_index))
  }

  return (
    <div className='courseParentDiv'>
      <div><h2>Kurslarım</h2></div>
      <button className='btn btn-primary m-3 rounded-5 ' onClick={getRandomCourse}>Rastgele Kurs Ata</button>
      <div className='cardSubParentDiv'>
        <button className='prewNextButton' onClick={prewCourse}>
          <FaChevronLeft/>
        </button>
          <div className='card'>
          <div className='cardTitlePrice'>
            <h2 className='cardTitle'>Title : {title}</h2>
            <h4 className='cardPrice'>Price : {price} TL</h4>
          </div>
          <p>Content : {content}</p>
          </div>
          <button className='prewNextButton' onClick={nextCourse}>
          <FaChevronRight/>
        </button>
      </div>
    </div>
  )
}
export default Courses;
