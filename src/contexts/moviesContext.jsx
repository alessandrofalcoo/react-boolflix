import { createContext, useContext, useState } from "react";

const MoviesContext = createContext()

// Qua creo il custom provider component
function MoviesProvider({ children, movies }) {
    return (
        <MoviesContext.Provider value={{ movies }}>
            {children}
        </MoviesContext.Provider>
    )
}


// qua creo una custom fetch hook
function useFetchMovies() {
    const [movies, setMovies] = useState([])
    const [searchText, setSearchText] = useState('')
    const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;

    // Debug delle variabili d'ambiente
    console.log("Tutte le variabili d'ambiente:", import.meta.env);

    if (!api_key) {
        console.error("Errore: la chiave API non è definita. Controlla il file .env.");
    } else {
        console.log("API Key:", api_key);
    }

    const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchText}`;
    console.log(base_movies_api_url);


    fetch(base_movies_api_url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMovies(data)
            setSearchText(data)

        })
    return movies
}

// qua creo un custom context hook

function useMoviesContext() {
    return useContext(MoviesContext)
}

// qua mi esporto tutto

export { MoviesProvider, useFetchMovies, useMoviesContext }