import { useState } from 'react';
import profile from '../assets/profile.jpg'; 

const tabs = ['Education', 'Courses', 'Experience', 'Details'];

const About = () => {
  const [activeTab, setActiveTab] = useState('Education');

  return (
    <section id="about" className="bg-[#0e1122] text-white px-6 py-20">
      <div className="w-full max-w-full px-4 md:px-8">

        {/* Title */}
        <h2 className="text-3xl font-semibold text-center mb-12">
          About <span className="text-cyan-400">Me</span>
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Card */}
          <div className="bg-[#00bcd4] relative text-center pt-20 pb-8 rounded-lg shadow-md">
            <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2">
              <img
                src={profile}
                alt="Uel Kiprotich"
                className="w-28 h-28 rounded-full border-4 border-white object-cover shadow"
              />
            </div>
            <h3 className="text-white font-bold text-lg mt-4">UEL KIPROTICH</h3>
            <p className="text-sm text-white">IT Technician</p>
            <p className="text-sm text-white">Web & Mobile Dev</p>
            <p className="text-sm text-white">Network Engineer</p>
          </div>

          {/* Right Tabs + Content */}
          <div>
            {/* Tab Header */}
            <div className="flex gap-6 border-b border-gray-600 text-sm mb-6 font-medium">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 transition ${
                    activeTab === tab
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-6 text-sm text-gray-300">
              {activeTab === 'Education' && (
                <>
                  <div>
                    <h4 className="text-cyan-400 font-bold">BSc in Information Technology</h4>
                    <p>Institute: Kisii University</p>
                    <p>Session: 2021 – 2025</p>
                    <p>Result: Ongoing</p>
                  </div>
                </>
              )}

              {activeTab === 'Courses' && (
                <>
                  <div>
                    <h4 className="text-cyan-400 font-bold">Web Development</h4>
                    <p>Institute: eMobilis</p>
                    <p>Session: Jan – Mar 2022</p>
                    <p>Result: Certified</p>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-bold">ICT Certificate</h4>
                    <p>Institute: Cambridge Universal College</p>
                    <p>Session: May – Aug 2021</p>
                    <p>Result: Certified</p>
                  </div>
                </>
              )}

              {activeTab === 'Experience' && (
                <>
                  <div>
                    <h4 className="text-cyan-400 font-bold">CBC Lab Setup</h4>
                    <p>Installed computers, configured OS, network setup, printer sharing.</p>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-bold">Network Engineering</h4>
                    <p>Configured routers/switches, IP plans, LAN layout, firewall setup.</p>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-bold">PC Assembling & Repair</h4>
                    <p>Hands-on builds, upgrades, BIOS setup, and driver installs.</p>
                  </div>
                </>
              )}

              {activeTab === 'Details' && (
                <div>
                  <p>
                    Huawei ICT Competition Finalist (2x), Huawei Campus Ambassador, GDSC & KUCSA Member. Excellent communicator, self-driven, and fast learner.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
