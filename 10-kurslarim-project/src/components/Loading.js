import React from 'react'
import {useState,useEffect} from 'react'

export const Loading = () => {
  const [showLoading, setShowLoading] = useState(true);
  
    return (
    <div>
         <span>Loading ...</span>
    </div>
  )
}
export default Loading;
