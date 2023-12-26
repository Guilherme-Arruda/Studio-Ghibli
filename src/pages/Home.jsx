import { useEffect, useState } from 'react';

import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch('https://ghibliapi.vercel.app/films');
    const data = await response.json();

    setMovies(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='min-h-[calc(100vh-56px)] px-12 py-6'>
          <h1 className='text-center text-2xl mb-12'>A List of All the Studio Ghibli Movies</h1>
          <ul className='grid-cols-[repeat(auto-fit,minmax(250px,1fr))] grid gap-x-8 gap-y-10'>
            {movies.map((movie) => {
              return <MovieCard key={movie.id} title={movie.title} src={movie.image} id={movie.id} />;
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Home;
