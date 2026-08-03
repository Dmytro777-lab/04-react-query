import { useState } from 'react';
import toast from 'react-hot-toast';
import { fetchMovies } from '../../services/movieService';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import MovieGrid from '../MovieGrid/MovieGrid';
import MovieModal from '../MovieModal/MovieModal';
import SearchBar from '../SearchBar/SearchBar';
import css from './App.module.css';
import type { Movie } from '../../types/movie';

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const handleSearch = async (query: string) => {
    setMovies([]);
    try {
      setLoading(true);
      setError(false);
      const data = await fetchMovies(query);
      if (data.length === 0) {
        toast.error('No movies found for your request.');
      }
      setMovies(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={css.app}>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movies.length > 0 && <MovieGrid movies={movies} onSelect={setSelectedMovie} />}
      {selectedMovie && <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
    </main>
  );
}
