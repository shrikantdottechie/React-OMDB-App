import {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import MovieDisplay from "./components/MovieDisplay";
import CriterionMoviesDisplay from "./components/CriterionMoviesDisplay";
import Form from "./components/Form";

function App() {
//variable with your apiKey
const apiKey = "671cecb3";

//State to hold movie data
const [movie, setMovie] = useState(null);
const [searchMovies, setSearchMovies] = useState(null);
let randomId = Math.round(Math.random() * 10000000);
//console.log(randomId);
//Function to getMovies
const getMovie = async (searchTerm) => {
  // make fetch request and store response
	try {
		
		const response = await fetch(
			`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
		);
		// Parse JSON response into a javascript object
		const data = await response.json();
		
		//set the Movie state to the movie
		setMovie(data);
	} catch(e){
		console.error(e)
	}
};


const getSearchMovies = async (searchTerm) => {
    try {
      // make fetch request and store response
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`
      );
      // Parse JSON response into a javascript object
      const data2 = await response.json();
      console.log(data2)
      //set the Movie state to the movie
      setSearchMovies(data2);
    } 
    catch (error) {
      console.error(error);
    }
  }
//const letters = 'tt';

//const searchForId = `${letters}${randomId}`;
//console.log(searchForId);
//This will run on the first render but not on subsquent renders
useEffect(() => {
  getMovie("Clueless");
}, []);
// USE OUR COMPONENTS IN APPs RETURNED JSX
// We pass the getMovie function as a prop called movie-search
// We pass movie as props to movie display
  return (
    <div className="App">
      <Form moviesearch={getMovie} criterionMovies={getSearchMovies}/>
      <MovieDisplay movie={movie} />
	  <CriterionMoviesDisplay searchMovies = {searchMovies} />
    </div>
  );
}

export default App;
