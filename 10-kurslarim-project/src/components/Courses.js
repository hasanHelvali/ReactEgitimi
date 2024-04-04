import React from 'react'
import Course from './Course'

export const Courses = ({courses,removeCourse}) => {
  console.log(courses);
  return (
    <div className='courseParentDiv'>
      <div><h2>Kurslarım</h2></div>
      <div className='cardSubParentDiv'>
        {
          courses.map((course,index)=>{
            return(
              <Course course={course} removeCourseById={removeCourse} ></Course>
              // <Course key={index} {...course} ></Course>
              /*Bu sekilde bir props gececek olursam course un alt bilesenlerini props olarak gecmis olurum. Yani course tarafında
              export const Course = ({id,title,content,price}) seklinde direkt olarak ilgili alanları yakalayabilirim. 
              Bu da props gecmede spread operatorunun bir kullanımıdır. {
               */
            )
          })
        }
      </div>
    </div>
  )
}
export default Courses;
