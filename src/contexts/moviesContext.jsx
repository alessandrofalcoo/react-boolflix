import { createContext, useContext, useState } from "react";

const MoviesContext = createContext()

// Qua creo il custom provider component
function MoviesProvider({ children }) {
    const [movies, setMovies] = useState([])
    const [searchText, setSearchText] = useState('')
    const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;

    const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchText}`;


    function fetchData() {
        fetch(base_movies_api_url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovies(data)
                setSearchText(data)
                console.log(movies);

            })
    }
    return (
        <>
            <MoviesContext.Provider value={{ movies, fetchData, searchText, setSearchText }}>
                {children}
            </MoviesContext.Provider>
        </>
    )
}

// qua creo un custom context hook

function useMoviesContext() {
    return useContext(MoviesContext)
}

// qua mi esporto tutto

export { MoviesProvider, useMoviesContext }