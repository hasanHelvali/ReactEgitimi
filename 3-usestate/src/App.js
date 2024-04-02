import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {//Buradaki bir yapı funcitonal Component yapısıdır.
  const [value, setValue] = useState(0)//UseStateSnippets dendiginde bu yapı karsımıza getirilir. Bu bir useState hook udur.
  /* Burada bir degisken tanımlıyorum gibi dusunulebilir. Bu degiskenin ismi value dur. Bu degiskenin baslangıc degeri useState icindeki degerdir.
  Bu degiskenin degerini guncelleyecek olan yapı ise useState degeridir. */


  const handleClick=()=>{
    //Bu bir arrow func yapısıdır.
    setValue(value+1);
    /*Burada degiskenin o anlık degeri value degeridir. Bu deger her zaman setvalue ile guncellenir. */
  };

  return (
    <div className="App">
      <button className='' onClick={handleClick} >Artır</button>
      {/* <button className='' onClick={()=>{setValue(value+1)}} >Artır</button> */}
      {/* arrowfunc bu sekilde kullanılır */}
      <div>Kurs Sayisi : {value}</div>
    </div>
  );



}

export default App;
