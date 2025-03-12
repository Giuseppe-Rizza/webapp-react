import ReviewCard from '../components/ReviewCard';

import { Link } from "react-router-dom"

export default function MoviePage() {

    return (<>
        <header id="book" className="border-bottom border-1 mb-3">

            <div className="d-flex mb-3">

                <img className="book-img"

                    src="http://localhost:3000/img/movies_cover/inception.jpg"

                    alt="inception" />

                <div>

                    <h1>Inception</h1>

                    <h3 className="text-muted"><i>Christopher Nolan</i></h3>

                    <p>The dream is real</p>

                </div>

            </div>
        </header>
        <section id="reviews">
            <header className="d-flex justify-content-between align-items-center mb-4">
                <h4>Feedbacks</h4>
            </header>

            <ReviewCard />

            <ReviewCard />

            <ReviewCard />

        </section>

        <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">

            <Link className="btn btn-secondary" to="/">HomePage</Link>

        </footer>
    </>
    );
}