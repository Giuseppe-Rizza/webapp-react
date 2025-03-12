import { Link } from "react-router-dom"

export default function Header() {

    return (

        <nav className="navbar bg-warning mb-2">
            <div className="container-fluid justify-content-start">
                <Link className="navbar-brand" to="/">Bool Movies</Link>
            </div>
        </nav>

    );

}