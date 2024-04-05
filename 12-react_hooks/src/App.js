import logo from './logo.svg';
import './App.css';
import React, { useReducer } from 'react';
import Calculate from './calculate';

export const numberContext=React.createContext();

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
function App() {
  const [count,dispatch] = useReducer(reducer,initialValue)//ilk parametrede reducer fonksiyonu, diger fonksiyonu baslangıc degeri verilir.
  //geriye donen count state in yeni durumudur. dispatch ise yollanan aksiyondur.
  return (
    <div className="App">
      <numberContext.Provider value={{count:count,dispatch:dispatch}}>
        {/* //Context in providers indan buradaki value ları yayınladım. Burada ise bir context kullanmıs oldum.*/}
        <Calculate/>
      </numberContext.Provider>
    </div>
  );
}

export default App;
