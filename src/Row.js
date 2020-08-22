import React, { useState} from 'react'
import axios from './axios';

function Row({ title }) {
  const [movies, setMovies] = useState([]);
  
  // a snippet of code which runs based on a specific condition
  useEffect(()=> {
    
    async function fetchData() {
    const request = await axios.get(fetchUrl);
    }
    fetchData();
  }, []);
  
  return (
    <div>
      <h2>{title}</h2>
      
      
      
    </div>
    )
}

export default Row