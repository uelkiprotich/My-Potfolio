import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navLinks = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md shadow-md z-50">
      <div className="flex items-center justify-between py-4 px-6">
        {/* Logo flush left */}
        <div className="flex-shrink-0 pl-4">
          <h1 className="text-2xl font-extrabold text-blue-600 tracking-wide cursor-pointer select-none">
            UEL KIPROTICH
          </h1>
        </div>

        {/* Nav links container */}
        <div className="hidden md:flex space-x-12 text-gray-700 text-lg font-medium flex-grow justify-end">
          {navLinks.map(link => (
            <Link
              key={link}
              to={link}
              smooth={true}
              duration={500}
              offset={-70}
              className="capitalize cursor-pointer hover:text-blue-600 transition-colors duration-300"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-3xl text-blue-600 focus:outline-none hover:text-blue-800 transition-colors duration-300 pr-4"
          aria-label="Toggle navigation menu"
          onClick={() => setNavOpen(!navOpen)}
        >
          &#9776;
        </button>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 py-6 flex flex-col items-center space-y-6 text-lg font-medium text-gray-700">
          {navLinks.map(link => (
            <Link
              key={link}
              to={link}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setNavOpen(false)}
              className="capitalize cursor-pointer hover:text-blue-600 transition-colors duration-300"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
