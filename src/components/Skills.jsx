import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaLaptopCode,
  FaTools,
 
} from 'react-icons/fa';
import {
  SiJavascript,
  SiFirebase,
  SiJsonwebtokens,
  SiFigma,
  SiCanva,
  SiMinutemailer,
  SiFlutter
} from 'react-icons/si';
import { MdOutlineLan } from 'react-icons/md';
import { BsTools } from 'react-icons/bs';

const skills = [
{ name: 'Routing & Switching', percent: 75, icon: <MdOutlineLan className="text-green-400" /> },
  { name: 'LAN/WAN Setup', percent: 80, icon: <MdOutlineLan className="text-cyan-300" /> },
  { name: 'PC Maintenance', percent: 75, icon: <FaLaptopCode className="text-gray-400" /> },
  { name: 'Tech Support', percent: 80, icon: <BsTools className="text-white" /> },
  { name: 'Flutter', percent: 85, icon: <SiFlutter className="text-green-400" /> },
  { name: 'React ', percent: 60, icon: <FaReact className="text-cyan-400" /> },
  { name: 'HTML', percent: 90, icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', percent: 85, icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', percent: 75, icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'Firebase (basic)', percent: 55, icon: <SiFirebase className="text-orange-400" /> },
  { name: 'Git', percent: 80, icon: <FaGitAlt className="text-red-500" /> },
  { name: 'Canva', percent: 70, icon: <SiCanva className="text-cyan-400" /> },
  { name: 'Documentation', percent: 70, icon: <SiMinutemailer className="text-cyan-200" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0e1122] text-white px-6 py-20">
      <div className="w-full max-w-full px-4 md:px-8">

        <h2 className="text-3xl font-semibold text-center mb-12">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex items-center space-x-4">
              {/* Icon */}
              <div className="text-3xl md:text-4xl">{skill.icon}</div>

              {/* Info */}
              <div className="w-full">
                <div className="flex justify-between text-sm font-medium mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded-full">
                  <div
                    className="bg-cyan-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
