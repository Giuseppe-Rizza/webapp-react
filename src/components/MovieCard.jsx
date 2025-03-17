import { Link } from "react-router-dom"

const MovieCard = (props) => {

    return (

        <div className="card mb-4" style={{ width: "20rem" }}>
            <img className="card-img-top"

                src={image}

                alt={title} />

            <div className="card-body">

                <h5 className="card-title">{title}</h5>

                <address><i>{author}</i></address>

                <p className="card-text">{abstract}</p>

                <div className="d-flex justify-content-center mt-auto">
                    <Link to={`/movies/${id}`} className="btn btn-primary px-4 py-2 rounded-pill shadow">
                        Info
                    </Link>
                </div>


            </div>

        </div>
    )
}

export default MovieCard