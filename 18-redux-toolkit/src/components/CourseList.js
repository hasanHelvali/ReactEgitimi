import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import CourseItem from './CourseItem';
import { clearCard } from '../control/cardSlice';
function CourseList() {
    const dispatch=useDispatch();
    const {quantity,cardItems,totalPrice}=useSelector((store)=>store.card)
  return (
    <>
    {quantity<1?(
        <section className='card'>
            <header>
                <h2>Sepetim</h2>
                <h4>Boş</h4>
            </header>
        </section>
    ):(
    <section className='card'>
        <header>
            <h2>Sepetim</h2>
        </header>
        <div>
            {cardItems.map((item)=>{
                return <CourseItem {...item}/>
            })}
        </div>
        <footer>
            <hr />
            <div>
                <h4>Toplam Tutar <span>{totalPrice} ₺</span></h4>
            </div>
            <button className='cardClearBtn' onClick={()=>dispatch(clearCard)}>Temizle</button>
        </footer>
    </section>
    )}
    </>
  )
}

export default CourseList