import axios from 'axios'

import { useState, useEffect } from "react"

import ReviewCard from '../components/ReviewCard';

import ReviewForm from '../components/ReviewForm';

import { Link, useParams } from "react-router-dom"

export default function MoviePage() {

    const { id } = useParams();

    const [movie, setMovie] = useState({});

    const fetchMovie = () => {

        axios.get("http://localhost:3000/api/movies/" + id)

            .then(
                res => {
                    setMovie(res.data)
                }
            )
            .catch(err => console.log(err)
            )
    }

    useEffect(fetchMovie, [])

    const renderReviews = () => {
        return movie.reviews?.map(
            review => <ReviewCard key={review.id} reviewProp={review} />
        )
    }

    return (
        <>
            <header id="book" className="border-bottom border-1 mb-3">

                <div className="d-flex mb-3">

                    <img className="img-fluid w-25"

                        src={movie.image}

                        alt={movie.title} />

                    <div className="ms-3 p-3">

                        <h1>{movie.title}</h1>

                        <h3 className="text-muted"><i>{movie.author}</i></h3>

                        <p>{movie.abstract}</p>

                    </div>

                </div>
            </header>
            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Reviews</h4>
                </header>

                {renderReviews()}

            </section>

            <section>

                <ReviewForm movie_id={movie.id} realoadReviews={fetchMovie} />

            </section>

        </>
    );
}