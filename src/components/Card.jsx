import { useMoviesContext } from "../contexts/moviesContext"


export default function Card() {
    const { movies } = useMoviesContext()
    return (
        <>
            <div className="main">
                <div className="row">
                    <div className="container my-3">
                        {movies.map(movie => (
                            <div className="card text-white" key={movie.id}>
                                <img className="card-img-top" src={movie.poster_path === null ? '../public/img/Netflix-symbol.png' : `http://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title} />
                                <div className="card-body">
                                    <h4 className="card-title">Movie: {movie.title}</h4>
                                    <p className="card-text"><strong>Original title:</strong> {movie.original_title}</p>
                                    <p className="card-language"><strong>Language:</strong> <strong className="text-uppercase">{movie.original_language}</strong></p>
                                    <p className="card-rating"><strong>Rating:</strong> {movie.vote_average}</p>
                                    <p className="card-overview"><strong>Overview:</strong> {movie.overview}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </>
    )
}