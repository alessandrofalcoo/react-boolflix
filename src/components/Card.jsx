import { useMoviesContext } from "../contexts/moviesContext"


export default function Card() {
    const { movies } = useMoviesContext()
    console.log(movies);
    return (
        <>
            <div className="container my-3">
                {movies.map(movie => (
                    <div className="card my-3" key={movie.id}>
                        <img className="card-img-top " src={`http://image.tmdb.org/t/p/w1920/${movie.poster_path}`} alt={movie.title} />
                        <div className="card-body">
                            <h4 className="card-title">Movie: {movie.title}</h4>
                            <p className="card-text">Movie's original title: {movie.original_title}</p>
                            <p className="card-language">Movie's language: <strong className="text-uppercase">{movie.original_language}</strong></p>
                            <p className="card-rating">Rating: {movie.vote_average}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}