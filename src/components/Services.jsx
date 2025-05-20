import { FaCode, FaTools } from 'react-icons/fa';
import { MdOutlineLan } from 'react-icons/md';

const services = [
  {
    title: 'Software Developer',
    icon: <FaCode className="text-4xl text-cyan-400" />,
    description:
      'I design and develop responsive web and mobile applications. I build clean, performant, and accessible UIs using modern tech.',
  },
  {
    title: 'IT Technician',
    icon: <FaTools className="text-4xl text-cyan-400" />,
    description:
      'I handle hardware & software troubleshooting, system installation, maintenance, and provide technical support.',
  },
  {
    title: 'Network Engineer',
    icon: <MdOutlineLan className="text-4xl text-cyan-400" />,
    description:
      'Experienced in LAN/WAN setup, routing, and switching. Huawei Certified with hands-on lab & campus network projects.',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#0e1122] text-white px-6 py-10">
      <div className="w-full max-w-full px-4 md:px-8">

        <h2 className="text-3xl font-semibold mb-12">
          My <span className="text-cyan-400">Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`bg-[#1a1d2e] rounded-lg p-6 hover:border-cyan-400 border border-transparent shadow-lg transition-all duration-300 ${
                idx === 1 ? 'border border-cyan-400 bg-[#101420]' : ''
              }`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">{service.description}</p>
             <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=uelkiprotich@gmail.com&su=Job%20Opportunity&body=Hi%20Uel,"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-cyan-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-cyan-500 transition inline-block"
>
  Hire Me
</a>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
