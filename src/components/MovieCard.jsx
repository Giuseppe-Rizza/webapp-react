import { Link } from "react-router-dom"

const MovieCard = () => {

    return (

        <div className="card mb-4">
            <img className="card-img-top"

                src="http://localhost:3000/img/movies_cover/inception.jpg"

                alt="Inception" />

            <div className="card-body">

                <h5 className="card-title">Inception</h5>

                <address><i>Christopher Nolan</i></address>

                <p className="card-text">The dream is real</p>

                <Link to="/movies" className="btn btn-primary">Info</Link>
            </div>
        </div>
    )
}

export default MovieCard