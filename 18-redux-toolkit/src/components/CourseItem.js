import React from 'react'
import { FaChevronUp } from "react-icons/fa";import { FaChevronDown } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { decrease, increase, removeItem } from '../control/cardSlice';
function CourseItem({id,title,price,img,quantity}) {
    const dispatch=useDispatch();
  return (
    <div className='cardItem'>
        <img src={img} alt="" />
        <div className='cardInfo'>
            <h4>{title}</h4>
            <h4>{price} ₺</h4>
            <div>
                <button className='cardQuantityButton' onClick={()=>{dispatch(increase(id))}}>
                    <FaChevronUp />
                </button>
                <p className='cardQuantity'>{quantity}</p>
                <button className='cardQuantityButton' onClick={()=>{dispatch(decrease(id))}}>
                    <FaChevronDown />
                </button>
            </div>
            <button className='cardDeleteButton' onClick={()=>{
                dispatch(removeItem(id))
            }}>Sil</button>
        </div>
    </div>
  )
}

export default CourseItem