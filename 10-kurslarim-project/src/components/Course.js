import React from 'react'

export const Course = ({course,removeCourseById}) => {
  const removeItem = ()=>{

  }

  return (
    <div className='card'>
        <div className='cardTitlePrice'>
          <h2 className='cardTitle'>Title : {course.title}</h2>
          <h4 className='cardPrice'>Price : {course.price} TL</h4>
        </div>
        <p>Content : {course.content}</p>
        <button className='btnDelete' onClick={()=>removeCourseById(course.id)}>Sil</button>
    </div>
  )
}
export default Course;