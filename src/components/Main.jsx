import { useMoviesContext } from "../contexts/moviesContext"

export default function Main() {
    const { movies } = useMoviesContext()
    console.log(movies);

    return (
        <>
            {movies.map(movie => (
                <div className="card" key={movie.id}>
                    <img className="card-img-top" src={movie.poster_path} />
                    <div className="card-body">
                        <h4 className="card-title">{movie.title}</h4>
                        <p className="card-text">{movie.overview}</p>
                    </div>
                </div>

            ))}
        </>
    )
}