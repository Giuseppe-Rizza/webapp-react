import axios from 'axios'

import { useState, useEffect } from "react"

import MovieCard from '../components/MovieCard';

export default function HomePage() {

    const [movies, setMovies] = useState([]);

    const fetchMovies = () => {

        axios.get("http://localhost:3000/api/movies")

            .then(
                res => {
                    setMovies(res.data)
                }
            )

            .catch(err => console.log(err)
            )
    }

    useEffect(fetchMovies, [])

    const renderMovies = () => {

        return movies.map(

            movie => {

                return (
                    <div className="col" key={movie.id} >
                        <MovieCard movieProp={movie} />
                    </div>
                )
            }
        )
    }

    return (
        <>
            <h1 className="text-primary">Bool Movies</h1>

            <h2><i>The best movie site</i></h2>

            <div className="row row-cols-3 mt-4">

                {renderMovies()}

            </div>
        </>
    );
}