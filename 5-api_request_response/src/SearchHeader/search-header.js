import { useState } from 'react';
import './search-header.css';

function SearchHeader({search}) {//func comp

    const [valueInput, setvalue] = useState('')

    const handleFormSubmit=(event)=>{
        event.preventDefault();//form submit edildiginde yenilenmesin diye yaptık.
        search(valueInput)
    }

    const handleChange=(event)=>{
        setvalue(event.target.value);
    }

    return (
        <div className="searchDiv">
            <form onSubmit={handleFormSubmit}>
                <label>Ne Arıyorsun</label>
                <input type="text" placeholder="" value={valueInput} onChange={handleChange}/>
            {/* <label>{value}</label> */}
            </form>

        </div> 
    );
}
/*Form her submit edildiginde bir event tetikleenir. bu event props un degerini gunceller. Buradaki props ise parent component teki
props a baglıdır. Burada her event tetiklenip props guncellendiginde parent component teki props a baglı olan event te tekiklenir.*/ 
export default SearchHeader;