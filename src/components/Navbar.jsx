import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">UEL KIPROTICH</h1>
        <div className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <Link
              key={link}
              to={link}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer text-gray-700 hover:text-blue-500 capitalize"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden z-50" onClick={() => setNavOpen(!navOpen)}>
          <button className="text-2xl">&#9776;</button>
        </div>

        {/* Mobile Menu */}
        {navOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md py-6 flex flex-col items-center space-y-4 md:hidden">
            {navLinks.map(link => (
              <Link
                key={link}
                to={link}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setNavOpen(false)}
                className="cursor-pointer text-gray-700 hover:text-blue-500 capitalize"
              >
                {link}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
