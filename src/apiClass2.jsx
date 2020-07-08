import React from 'react';
import './App.css';



const APIKEY = '49b6734c';
const APIURL = 'http://www.omdbapi.com';


let fetchMovie = (search) => {
        return fetch(APIURL + '?apikey=' + APIKEY + '&s=' + search).then(res => res.json());
    }

export default class ApiClass2 extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    }
  }
  componentDidMount() {
    let search = '=tintin'
    // fetch(APIURL + '?apikey=' + APIKEY + '&s=back to the future').then(res => res.json()).then(apiresult => console.log(apiresult))
    fetchMovie(search).then(res => {
      this.setState({
        movies: res.Search,
      })
    })
  }

  render() {
    return (
      <>
        {/* <h1>Hello Sim</h1>
        <ul>
          {
            this.state.movies.map(movie => <li key={movie.imdbID}>{movie.Title}
              <img src={movie.Poster} />
            </li>)
          }
        </ul> */}
        <div className="bg-dark">
            <div className="text-center p-5">
                <input type="text" name="" id="videos"/>
                <input type="button" value="Search"/>
            </div>
            <div className="row justify-content-center p-0 m-0 w-100">
                {this.state.movies.map(movie =>
                <div className="card col-lg-2 m-3" style={{ "width": "18rem" }}>
                    <img className="card-img-top" src={movie.Poster} alt="Card image cap" />
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
}