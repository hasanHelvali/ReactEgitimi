import axios from 'axios';
import './App.css';
import SearchHeader from './SearchHeader/search-header';
import searchImages from './services/api'
import {useState} from 'react'
import ImageList from './ImageList/image-list';

function App() {
const [images, setimages] = useState([])

  const handleSubmit=async (term)=>{
    console.log(term);
    const result =await searchImages(term)
    setimages(result);
  }
  return (
    <div className="App">
      <SearchHeader search={handleSubmit}/>
      {/* Child Comp */}
      <ImageList imagesData={images}/>
    </div>
  );
}

export default App;