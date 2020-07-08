import React from 'react';
import './App.css';


const APIKEY = '49b6734c';
const APIURL = 'http://www.omdbapi.com';



function fetchMovie(search ='=back to the future'){
  return fetch(APIURL + '?apikey=' + APIKEY + '&s=' +search).then(res=>res.json());
}


export default class ApiClass1 extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    // fetch(APIURL + '?apikey=' + APIKEY + '&s=back to the future').then(res => res.json()).then(apiresult => console.log(apiresult))
    fetchMovie().then(res=>{
      this.setState({
        movies: res.Search,
      })
    })
  }

  render() {
    return (
      <>
        <h1>Hello Sim</h1>
        <ul>
          {
          this.state.movies.map(movie => <li>{movie.Title}</li>)
          }
        </ul>
      </>
    );
  }
}