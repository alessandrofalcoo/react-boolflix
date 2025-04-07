import { useMoviesContext } from "../contexts/moviesContext"

export default function Main() {
    const { movies } = useMoviesContext()
    console.log(movies);

    return (
        <>
            <div className="container my-3">
                {movies.map(movie => (
                    <div className="card my-3" key={movie.id}>
                        <img className="card-img-top" src={movie.backdrop_path} />
                        <div className="card-body">
                            <h4 className="card-title">{movie.title}</h4>
                            <p className="card-text">{movie.overview}</p>
                            <p className="card-language text-uppercase fw-bold">{movie.original_language}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}