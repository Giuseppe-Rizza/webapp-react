import MovieCard from '../components/MovieCard';

export default function HomePage() {

    return (
        <>
            <h1 className="text-primary">Bool Movies</h1>

            <h2><i>The best movies site</i></h2>

            <div className="row row-cols-2 mt-2">

                <MovieCard />

                <MovieCard />

                <MovieCard />

                <MovieCard />

            </div>
        </>
    );
}