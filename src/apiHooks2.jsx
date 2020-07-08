import React, { useState, useEffect } from 'react';
import './App.css';


export default function ApiHooks2() {
    const [myMovies, setMyMovies] = useState({
        movies: [],
        })
    const [text, setText] = useState("")
        
    
    useEffect(() => {
        document.getElementById('videos').onchange = () => {
            setText(document.getElementById('videos').value)  
            document.getElementById('videos').value = ""
        }
        document.getElementById('myBtn').onclick = () => {
            setText(document.getElementById('videos').value)  
            document.getElementById('videos').value = ""
        }
        if(text != "") {                       
            fetchMovie(text).then(res => {                  
                setMyMovies({
                    movies: res.Search,                                                 
                })                                                                             
            })  
        }               
        
    })

    const APIKEY = '49b6734c';
    const APIURL = 'http://www.omdbapi.com';


    let fetchMovie = (search) => {
        return fetch(APIURL + '?apikey=' + APIKEY + '&s==' + search).then(res => res.json());
    }

    return (
      <>
        <div className="bg-dark">
            <div className="text-center p-5">
                <input type="text" name="" id="videos"/>
                <input type="button" value="Search" id="myBtn" />               
            </div>  
            <div className="row justify-content-center p-0 m-0 w-100">
                {myMovies.movies.map(movie =>
                <div className="card col-lg-2 m-3" style={{ "width": "18rem" }}>    
                    <img className="card-img-top" height='250' src={movie.Poster} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{movie.Title}-{movie.Year}</h5>
                        <p className="card-text">{movie.Genre}</p>
                </div>
                </div>
            )}
            </div>
        </div>
      </>
    );
}