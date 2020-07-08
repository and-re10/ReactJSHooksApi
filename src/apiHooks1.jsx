import React, { useState, useEffect } from 'react';
import './App.css';


export default function ApiHooks1() {
  const [myChoix, setMyChoix] = useState({
    movies: [],
  })
  useEffect(() => {
      let search1 = '=nemo'
    // fetch(APIURL + '?apikey=' + APIKEY + '&s=back to the future').then(res => res.json()).then(apiresult => console.log(apiresult))
    fetchMovie(search1).then(res=>{
      setMyChoix({
        movies: res.Search,
      })
    })
  })

    const APIKEY = '49b6734c';
    const APIURL = 'http://www.omdbapi.com';

    function fetchMovie(search){
        return fetch(APIURL + '?apikey=' + APIKEY + '&s=' +search).then(res=>res.json());
    }


  return (
    <>
      <h1>Hello Sim</h1>  
      
        <ul>
          {myChoix.movies.map(movie => <li>{movie.Title}</li>)} 
        </ul>
    </>
  );
}