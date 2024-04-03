import {useState,useEffect} from 'react';

//Bu compoennt sadece useState ve useEffect mantıgının anlasılması icin bir misal icermektedir:
function UseState() {
    const [angular, setangular] = useState(0);
    const [react, setreact] = useState(0);
  
    const setNg = () => {
      setangular(angular+1)
    }
    
    const setRc = () => {
      setreact(react+1)
    }
  
  
    useEffect(()=>{
      /*Component ilk render edildiginde ve compoennt icindeki state lerden herhangi birinde bir degisiklik oldugunda calısır. */
      console.log("ilk kez render edildiginde ve her state degistiginde yani her zaman calısır.");
    })
  
  
    useEffect(()=>{
      //sadece sayfa ilk yuklendiginde calısır.
      console.log("ilk kez render edildiginde calısır, baska da calısmaz.");
      //ngOnInit in karsılıgıdır.
  
    },[])
  
    useEffect(()=>{
      //sayfa ilk render edildiginde ve sadece angular degerinde bir degisiklik oldugunda calısır.
      console.log("Ilk kez render edildiginde ve verilen state te bir deigisklik oldugunda calısır.");
    },[angular])
   return (
    <div className="App">
      <div>
        <button onClick={setNg} className='firstDiv'>Angular ++</button>
        {/* <button onClick={()=>{setNg(angular+1)}} className=''>Angular ++</button> */}
        <div>Angular : {angular} </div>
      </div>

      <div>
        <button onClick={setRc} className=''>React ++</button>
        <div>React : {react} </div>
      </div>
    </div>
  );
}