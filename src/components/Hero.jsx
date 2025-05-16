import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import profile from '../assets/profile.jpg'; 
import bg from '../assets/bg-mountain.jpg'; // new wide background

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content: FULL WIDTH */}
      <div className="relative z-10 w-full h-full px-6 py-12 flex flex-col md:flex-row items-center justify-between">
        {/* Left Column */}
        <div className="text-white space-y-6 md:pl-20 md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">UEL KIPROTICH</h1>
          <h2 className="text-xl md:text-2xl">
            And I'm a <span className="text-cyan-400 font-semibold">Web & Mobile Developer</span>
          </h2>
          <p className="max-w-md text-gray-200">
           Motivated IT graduate specialized in web and mobile development, with real-world experience in system setup, network engineering, and building user-centric software solutions. Focused on delivering clean, reliable, and scalable code.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/cv-uel-kiprotich.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 text-white px-5 py-2 rounded-full hover:bg-cyan-600 transition"
            >
              📄 View CV
            </a>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="bg-transparent border border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition cursor-pointer"
            >
              Explore My Work
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex space-x-5 text-xl pt-4 justify-center md:justify-start">
            <a href="https://github.com/uelkiprotich" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/uel-kiprotich-659395231/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="mailto:uelkiprotich@gmail.com"><FaEnvelope /></a>
          </div>
        </div>

        {/* Right Column */}
        {/* Right Side – Styled Image */}
<div className="relative w-[250px] h-[270px]">
  {/* Hex Background with subtle glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-cyan-400 to-cyan-300 rounded-[20%] clip-hex shadow-xl z-0" />

  {/* Profile Image */}
  <img
    src={profile}
    alt="Uel Kiprotich"
    className="relative z-10 w-[220px] h-[250px] object-cover rounded-[20%] clip-hex ring-2 ring-white"
  />
</div>



      </div>
    </section>
  );
};

export default Hero;
