import { useState } from 'react';
import { Link } from 'react-router-dom';

import { X, Menu, Star, GitFork, Github } from 'lucide-react';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const gitRepo = 'https://github.com/Guilherme-Arruda/Studio-Ghibli';
  const forkGitRepo = 'https://github.com/Guilherme-Arruda/Studio-Ghibli/fork';
  const gitProfile = 'https://github.com/Guilherme-Arruda';

  return (
    <nav>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3.5'>
        <Link to='/'>
          <span className='text-xl whitespace-nowrap'>The Studio Ghibli Collection</span>
        </Link>
        <button
          aria-controls='navbar-default'
          aria-expanded={isExpanded}
          onClick={toggleNavbar}
          className='md:hidden text-gray-500 rounded-lg dark:text-gray-400'
        >
          {isExpanded ? <X /> : <Menu />}
        </button>
        <div className={`${isExpanded ? 'block' : 'hidden'} w-full md:block md:w-auto`} id='navbar-default'>
          <ul className='flex flex-col p-3.5 mt-3.5 font-medium rounded-lg bg-gray-50 dark:bg-gray-800 md:flex-row md:space-x-5 md:p-0 md:mt-0 md:bg-gray-200 md:dark:bg-gray-900 md:text-sm'>
            <li className='flex items-center gap-1.5 py-2 pl-3 pr-4 rounded hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-700 dark:hover:text-blue-500 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent'>
              <Star size={17} />
              <Link to={gitRepo}>Star this Project</Link>
            </li>
            <li className='flex items-center gap-1.5 py-2 pl-3 pr-4 rounded hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-700 dark:hover:text-blue-500 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent'>
              <GitFork size={17} />
              <Link to={forkGitRepo}>Fork to your Github</Link>
            </li>
            <li className='flex items-center gap-1.5 py-2 pl-3 pr-4 rounded hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-700 dark:hover:text-blue-500 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent'>
              <Github size={17} />
              <Link to={gitProfile}>Follow Guilherme-Arruda</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
