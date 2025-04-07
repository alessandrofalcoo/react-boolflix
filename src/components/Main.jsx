import { useMoviesContext } from "../contexts/moviesContext"

export default function Main() {
    const { movies } = useMoviesContext()
    console.log(movies);

    return (
        <>
            <div className="container my-3">
                {movies.map(movie => (
                    <div className="card my-3" key={movie.id}>
                        <img className="card-img-top " src={`http://image.tmdb.org/t/p/w1920/${movie.poster_path}`} alt={movie.title} />
                        <div className="card-body">
                            <h4 className="card-title">{movie.title}</h4>
                            <p className="card-text">{movie.original_title}</p>
                            <p className="card-language text-uppercase fw-bold">{movie.original_language}</p>
                            <p className="card-rating">{movie.vote_average}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}