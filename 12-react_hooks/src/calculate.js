
import { useContext } from "react";//once context e eristim.
import {numberContext} from './App'//sonra number context e eristim.

function Calculate() {
    const context=useContext(numberContext)//context i lokalize ettim.
    return ( <>
          <div>Sayi : {context.count}</div>
      <button onClick={()=>context.dispatch('increment')}>Arttır</button>
      <button onClick={()=>context.dispatch('decrement')}>Azalt</button>
      <button onClick={()=>context.dispatch('reset')}>Sıfırlama</button>
    </> );
}

export default Calculate;