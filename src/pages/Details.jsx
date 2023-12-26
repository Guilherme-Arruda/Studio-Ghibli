import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Loading from '../components/Loading';

const Details = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const fetchData = async (id) => {
    const response = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
    const data = await response.json();

    setMovie(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='px-4 py-8 sm:px-8'>
          <div className='flex flex-col items-center justify-center h-auto gap-4 lg:h-[calc(100vh-56px-64px)] lg:gap-24 lg:flex-row'>
            <div className='w-[300px] rounded-xl overflow-hidden'>
              <img src={movie.image} alt={movie.title} />
            </div>
            <div className='flex flex-col max-w-full gap-2 lg:max-w-[60%]'>
              <h1 className='text-2xl text-center mb-4 lg:text-4xl lg:text-start'>{movie.title}</h1>
              <div className='flex flex-col gap-2 lg:flex-row lg:gap-20'>
                <span>
                  <span className='font-bold'>Romaji Title: </span>
                  {movie.original_title_romanised}
                </span>
                <span>
                  <span className='font-bold'>Original Title: </span>
                  {movie.original_title}
                </span>
              </div>
              <span className='text-justify'>
                <span className='font-bold'>Sinopse: </span>
                {movie.description}
              </span>
              <span>
                <span className='font-bold'>Director: </span>
                {movie.director}
              </span>
              <span>
                <span className='font-bold'>Release Date: </span>
                {movie.release_date}
              </span>
              <Link to={'/'}>
                <button className='bg-blue-500 w-full text-white py-[0.8rem] px-16 mt-6 rounded-lg hover:bg-blue-600'>
                  Go back
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
