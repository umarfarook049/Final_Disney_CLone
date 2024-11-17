import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// Define the movie type
interface Movie {
    id: number;
    title: string;
    poster_path: string;
}

const SearchMovie: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
    const [trailerKey, setTrailerKey] = useState<string | null>(null); // For the trailer key
    const [showModal, setShowModal] = useState(false); // For modal visibility

    const getMovies = () => {
        try {
            fetch(
                "https://api.themoviedb.org/3/discover/movie?api_key=66b41facdbba6abf7ec79518e9e9c4aa"
            )
                .then((res) => res.json())
                .then((json) => {
                    setMovies(json.results);
                    setFilteredMovies(json.results);
                });
        } catch (err) {
            console.error(err);
        }
    };

    const getTrailer = async (movieId: number) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=66b41facdbba6abf7ec79518e9e9c4aa`
            );
            const data = await response.json();

            const trailer = data.results.find(
                (video: any) => video.type === 'Trailer' && video.site === 'YouTube'
            );

            if (trailer) {
                setTrailerKey(trailer.key);
                setShowModal(true);
            } else {
                alert('Trailer not available for this movie.');
            }
        } catch (err) {
            console.error('Error fetching trailer:', err);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    useEffect(() => {
        if (searchTerm === '') {
            setFilteredMovies(movies);
        } else {
            const filtered = movies.filter((movie) =>
                movie.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredMovies(filtered);
        }
    }, [searchTerm, movies]);

    return (
        <>
            <div className="flex h-full w-full">
                <div className="w-1/12">
                    <Navbar />
                </div>
                <div className="w-12/12">
                    <div className="bg-black">
                        <div className="flex px-4 py-3 rounded-md border-2 border-blue-500 overflow-hidden w-[60rem] mx-auto font-[sans-serif]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 192.904 192.904"
                                width="22px"
                                className="fill-gray-600 mr-3 rotate-90 mt-3"
                            >
                                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                            </svg>
                            <input
                                type="text"
                                placeholder="Search Movies..."
                                className="w-full outline-none bg-transparent text-gray-600 text-sm text-white"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <h1 className="text-white ml-12 font-bold text-3xl mt-4">
                            Search Results
                        </h1>
                        <div className="grid grid-cols-8 ml-12 mt-2">
                            {filteredMovies.map((movie, index) => (
                                <div
                                    key={index}
                                    className="max-w-sm rounded overflow-hidden shadow-lg mt-2 ml-2 hover:scale-125 transition duration-500 cursor-pointer"
                                    onClick={() => getTrailer(movie.id)} // Fetch trailer on click
                                >
                                    <img
                                        className="w-full"
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.title}
                                    />
                                    <div className="px-4 py-2">
                                        <h2 className="text-white text-lg font-semibold">
                                            {movie.title}
                                        </h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Trailer Modal */}
            {showModal && trailerKey && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
                    <div className="relative w-4/5 h-4/5 bg-white rounded-lg">
                        <button
                            className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded"
                            onClick={() => setShowModal(false)} // Close modal
                        >
                            Close
                        </button>
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${trailerKey}`}
                            title="YouTube trailer"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}

            <div className="bg-slate-950">
                <Footer />
            </div>
        </>
    );
};

export default SearchMovie;
