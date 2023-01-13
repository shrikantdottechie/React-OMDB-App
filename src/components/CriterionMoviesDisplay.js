//create a new component to display the search criterion movies

import Movie from "./Movie";
const CriterionMoviesDisplay = ({searchMovies}) => {
    console.log("data =", searchMovies)
    //function to return loaded JSX
    const loaded = () => {
      return (
        <>
        <h1>Search Movies</h1>
        <div className="searchMoviesContainer">
              { searchMovies.Search.map((element, idx) => { 
                  return (
                    <Movie key = {idx} element= {element}  />)
                }
              )
            }
        </div>
        </>
      );
    };
  
    //function to return loading JSX
    const loading = () => {
      return <h4>Loading...</h4>;
    };
  
    //Ternary operator will determine which functions JSX we will return
    return searchMovies ? loaded() : loading();
    
  };
  
  export default CriterionMoviesDisplay;