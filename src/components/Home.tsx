import React, { useEffect, useState } from 'react';

// Define the movie type
interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerKey, setTrailerKey] = useState<string | null>(null); // To store the YouTube trailer key
  const [showModal, setShowModal] = useState(false); // To control the modal visibility

  // Fetch movies
  const getMovies = () => {
    try {
      fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=66b41facdbba6abf7ec79518e9e9c4aa'
      )
        .then((res) => res.json())
        .then((json) => setMovies(json.results));
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch trailer for a movie
  const getTrailer = async (movieId: number) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=66b41facdbba6abf7ec79518e9e9c4aa`
      );
      const data = await response.json();

      // Find a trailer video
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

  // Reusable grid component for movie sections
  const MovieGrid = ({
    title,
    movieList,
  }: {
    title: string;
    movieList: Movie[];
  }) => (
    <>
      <h1 className="text-white ml-28 font-bold text-3xl mt-4">{title}</h1>
      <div className="grid grid-cols-6 ml-28 mt-2">
        {movieList.map((movie) => (
          <div
            key={movie.id}
            className="max-w-sm rounded overflow-hidden shadow-lg mt-2 ml-2 hover:scale-125 transition duration-500 cursor-pointer"
            onClick={() => getTrailer(movie.id)} // On click, fetch the trailer
          >
            <img
              className="w-full"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
    </>
  );

  return (
    <>
      {/* Latest Releases */}
      <MovieGrid
        title="Latest Releases"
        movieList={movies.slice(0, 6)}
      />

      {/* Entertainment All-Rounders */}
      <MovieGrid
        title="Entertainment All-Rounders"
        movieList={movies.slice(6, 12)}
      />

      {/* Comedy */}
      <MovieGrid
        title="Comedy"
        movieList={movies.slice(13, 19)}
      />

      {/* Action */}
      <MovieGrid
        title="Action"
        movieList={movies.slice(8, 14)}
      />

      {/* Modal for trailer */}
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
    </>
  );
};

export default Home;
