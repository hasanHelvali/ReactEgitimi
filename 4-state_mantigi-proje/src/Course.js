import Angular from'./images/angular.jpg';
import Bootstrap5 from'./images/bootstrap5.png';
import CSharp from'./images/ccsharp.png';
import KompleWeb from'./images/kompleweb.jpg';
import './Course.css';

const courseMap={
    Angular:Angular,
    Bootstrap5:Bootstrap5,
    CSharp:CSharp,
    KompleWeb:KompleWeb,

    /*js de key ve value degerleri birbirine esit ise 
        Angular:Angular,
    Bootstrap5:Bootstrap5,
    CSharp:CSharp,
    KompleWeb:KompleWeb,

    yerine 
    
    Angular
    Bootstrap5
    CSharp
    KompleWeb
    
    seklinde  de tanımlanabilir.,*/
}
function Course(courseName){//Bir functional comp olusturdum.
    console.log(courseName);
    return (

        <div className='courseDiv'>
            {/* <img src={courseName.courseName} alt="" /> */}
            <img className='courseImage' src={courseMap[courseName.courseName]} alt="" />
        </div>
    );
}

export default Course;