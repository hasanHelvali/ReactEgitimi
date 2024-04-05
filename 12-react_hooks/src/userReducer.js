import React from 'react'
import {useReducer}  from 'react'


const initialValue=0;
const reducer=(state,action)=>{
  /*Buradaki reducer iki parametre alır. gelen Action a gore islemler yapılır. 
  Bu islemler de iligli state de kullanılır.
   */

  switch(action){
    case'increment':return state+1;
    case'decrement':return state-1;
    case'reset':return initialValue;
    default: return state;
  }
}
function useReducerFunc() {
    const [count,dispatch] = useReducer(reducer,initialValue)//ilk parametrede reducer fonksiyonu, diger fonksiyonu baslangıc degeri verilir.
    //geriye donen count state in yeni durumudur. dispatch ise yollanan aksiyondur.
    return (
      <div className="App">
        <div>Sayi : {count}</div>
        <button onClick={()=>dispatch('increment')}>Arttır</button>
        <button onClick={()=>dispatch('decrement')}>Azalt</button>
        <button onClick={()=>dispatch('reset')}>Sıfırlama</button>
      </div>
    );
  }
