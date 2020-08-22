import React, { useState } from 'react';
import axios from './axios';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  
  // a snippet of code which runs based on a specific condition
  useEffect(() => {
    
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  
  return (
    <div className="row">
      <h2>{title}</h2>
      
        <div className="row_posters">
        
        {movies.map(movie => (
          <img 
          className="row__poster"
          src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
        ))}
        </div>
    </div>
  )
}

export default Row