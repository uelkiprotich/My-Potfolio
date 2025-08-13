import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import profile from '../assets/profile.jpg'; 
import back from '../assets/bg.mp4';
import kk from '../assets/ke.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden mt-12 lg:mt-15 px-12"
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        poster={kk}
      >
        <source src={back} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-center md:justify-between max-w-7xl mx-auto h-full px-6 py-16">
        
        {/* Left Column */}
        <div className="text-white space-y-6 md:w-1/2 w-full max-w-xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide">
            UEL KIPROTICH
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl">
            And I'm a{' '}
            <span className="text-cyan-400 font-semibold">
              Software Developer & Network Technician
            </span>
          </h2>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            A results-driven Information Technology professional with experience as an IT Technician, Web and Mobile Developer,
             and Network Engineer. Skilled in modern web technologies, system maintenance, and network infrastructure,
              with a strong foundation in technical support and application development. Known for delivering user-focused solutions, 
              thriving in collaborative environments, and continuously pursuing technological excellence.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-4">
            <a
              href="/UEL KIPROTICH.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 text-white px-5 py-2 rounded-full hover:bg-cyan-600 shadow-md transition font-semibold"
            >
              📄 View CV
            </a>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="border border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition cursor-pointer shadow-md font-semibold"
            >
              Explore My Work
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 text-2xl pt-6 justify-center md:justify-start text-gray-300">
            <a href="https://github.com/uelkiprotich" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/uel-kiprotich-659395231/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white transition">
              <FaLinkedin />
            </a>
            <a href="mailto:uelkiprotich@gmail.com" aria-label="Email" className="hover:text-white transition">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right Column - hidden on small screens */}
        <div className="relative w-84 h-132 rounded-3xl overflow-hidden shadow-lg ring-4 ring-cyan-400 mt-12 md:mt-0 hidden md:block">
          <img
            src={profile}
            alt="Uel Kiprotich"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
