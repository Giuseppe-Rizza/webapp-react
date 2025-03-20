import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

    return (

        <nav className="navbar bg-warning mb-2">
            <div className="container-fluid justify-content-start">
                <Link className="navbar-brand" to="/">Bool Movies</Link>
                <Link to="/movies/create" className="icon-link">
                    <FontAwesomeIcon icon={faClapperboard} size="2x" style={{ color: "black", transform: "rotate(-10deg)" }} title="Add Movie" />
                </Link>
            </div>
        </nav>

    );

}