import axios from 'axios';

const searchImages=async (term)=>{
    const response = await axios.get("https://api.unsplash.com/search/photos",{
      headers:{
        Authorization:"Client-ID N6-m9kpo_OJlUOBd7cOwGxOk8IJoKRqDnLJsxLCOTHM"
      },
      params:{
        query:term
      }
    })
    return response.data.results;
  }

  export default searchImages;