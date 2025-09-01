import React from 'react';

const projects = [
  {
    title: 'FireOrion POD Platform',
    description:
      'A print-on-demand web platform tailored for the Kenyan market. Enables custom product creation, live previews, Firebase authentication & real-time order tracking.',
    tech: ['React', 'Firebase', 'Tailwind', 'Node.js'],
    image: '/fireorion.jpg',
    
  },
  {
    title: 'Social Media Sentiment Analysis',
    description:
      'An NLP web system for analyzing emotion and sarcasm in tweets. Useful for mental health, business sentiment, and opinion mining.',
    tech: ['Python', 'Firebase', 'React.js'],
    image: 'project1.jpg',
    
  },
  {
    title: 'Engolon Livestock Hub',
    description:
      'A smart Ecommerce platform targeting the Kenyan market,Features include order placement, Livestock listing, testimonials, and Mpesa integration',
    tech: ['React', 'Firebase', 'Tailwind', 'Node.js'],
    image: 'engolon.png',
    
  },
  {
    title: 'CBC Lab Setup & Network Config',
    description:
      'Led the physical setup of a CBC school computer lab: assembled PCs, installed OS, configured networks, shared printers and file systems.',
    tech: ['PC Setup', 'LAN', 'Windows OS'],
    image: '/cbc-lab.jpg',
    
  },
  {
    title: 'Computer Assembling & Repair',
    description:
      'Hands-on experience troubleshooting desktops and laptops, assembling machines, upgrading hardware and improving performance.',
    tech: ['Hardware', 'BIOS', 'Drivers'],
    image: '/pc-repair.jpg',
    
  },
  {
    title: 'LAN/WAN Configuration Project',
    description:
      'Designed and implemented small-office networks: routers, switches, IP plans, DHCP/static assignments and internet sharing.',
    tech: ['Switching', 'Routing', 'Ethernet'],
    image: '/network-config.jpg',
    
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0e1122] text-white px-6 py-20">
      <div className="w-full max-w-full px-4 md:px-8">
        <h2 className="text-3xl font-semibold mb-12">
          My <span className="text-cyan-400">Portfolio</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-[#1a1d2e] rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-cyan-400 transition-all"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-left flex flex-col h-[calc(100%-12rem)]">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-4 text-xs">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-cyan-800/30 border border-cyan-400/50 px-2 py-1 rounded-full text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-5 flex justify-between">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline text-sm"
                    >
                      🔗 Live
                    </a>
                  )}
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline text-sm"
                    >
                      💻 Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
