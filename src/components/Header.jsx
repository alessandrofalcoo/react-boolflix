import { useMoviesContext } from "../contexts/moviesContext";

export default function Header() {
    const { fetchData, setSearchText, fetchSeries, setLanguage } = useMoviesContext()

    const handleInputChange = (e) => {
        setSearchText(e.target.value)
        setLanguage(e.target.value)
    }
    return (
        <>
            <nav
                className="navbar navbar-expand-sm navbar-light "
            >
                <div className="container">
                    <a className="navbar-brand" href="#"><img className="img-fluid logo" src="../public/img/Netflix-symbol.png"></img></a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                        <form onSubmit={(e) => { e.preventDefault(); fetchData(); fetchSeries() }} className="d-flex my-2 my-lg-0">
                            <input
                                className="form-control me-sm-2"
                                type="text"
                                placeholder="Search"
                                onChange={handleInputChange}
                            />
                            <button
                                className="btn btn-outline-success my-2 my-sm-0"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>


        </>
    )
}