
import axios from 'axios';
import React, {useState} from 'react';
function SearchMovie() {

    const [input, setinput] = useState("");
    const [moviesArray, setMoviesArray] = useState([]);
    // const image = "https://image.tmdb.org/t/p/original";


function handleChange(e) {
    setinput(e.target.value);
}

function handleSubmit(e) {
    e.preventDefault();

    axios
        .get(
            `https://api.themoviedb.org/3/search/movie?api_key=8125db8f67d23da1d30f6063b1b794b8&language=en-US&query=${input}&page=1&include_adult=false'`
        )
        .then((results) => {
            setMoviesArray(results.data.results);
        });
}

return (
    < >
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search" value={input} onChange={handleChange} />
            <button>Search</button>
        </form>



        <div className="results" >
            {
            moviesArray.map((movie, index) => {
                return (
                    
                    <img src='movies.proster_path'/>
            
          )
            })}
        </div>
    </>
);
}


export default SearchMovie;




