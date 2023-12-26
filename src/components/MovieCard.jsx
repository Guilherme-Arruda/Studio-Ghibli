import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieCard = ({ id, title, src }) => {
  return (
    <li key={id} className='flex flex-col items-center gap-4'>
      <Link to={`/details/${id}`}>
        <div className='w-[250px] rounded-xl overflow-hidden transition-all duration-200 hover:scale-105'>
          <img src={src} alt={title} />
        </div>
      </Link>
      <span className='text-[110%] text-center'>{title}</span>
    </li>
  );
};

MovieCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
}

export default MovieCard;
