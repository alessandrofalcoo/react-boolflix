import { useMoviesContext } from "../contexts/moviesContext"

export default function Main() {
    const { movies } = useMoviesContext()
    console.log(movies);

    return (
        <>
        </>
    )
}