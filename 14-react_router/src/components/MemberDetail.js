import React from 'react'
import {useParams} from 'react-router-dom'

function MemberDetail() {
    const params=useParams();//useParams a ne aktarılırsa burada ilgili fonksiyon ile ilgili degiskene aktarılır. Bir key value ikilisi bize gelir.
    const memberId = params.memberId//memberId seklinde route yapısında alınan deger burada aynı isimde tekrardan ekde edildi.
    //İlgili yapı bu sekilde de elde edilebilir.
    
    // const {memberId}=useParams(); 
    // Bu yonteme ise destructuring yontemi denir. Bu sekilde tek satırlık kodlada ilgili degere ulasabiliriz. Bu yontemi props gecerken de yapmıstık. 
 
    return (
    <div>MemberDetail : {memberId}</div>
  )
}

export default MemberDetail