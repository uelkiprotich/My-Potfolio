import { useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    subject: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg('');

    // Simple front-end validation example
    if (!formData.email || !formData.message) {
      setResponseMsg('Email and message are required.');
      setLoading(false);
      return;
    }

    try {
      console.log('Submitting form data:', formData);

      const res = await fetch('http://localhost:8000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', res.status);

      const data = await res.json();

      console.log('Response JSON:', data);

      if (res.ok) {
        setResponseMsg('Message sent successfully!');
        setFormData({
          first_name: '',
          last_name: '',
          phone: '',
          subject: '',
          email: '',
          message: '',
        });
      } else {
        setResponseMsg(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setResponseMsg('Server error, please try later.');
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="bg-[#0e1122] text-white px-6 py-10">
      <div className="w-full max-w-full px-4 md:px-8">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Contact <span className="text-cyan-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="space-y-6">
            <p className="text-gray-300">
              I’m currently seeking opportunities to contribute to innovative
              teams in the areas of software development, IT support, or
              networking. If you’re looking for a motivated professional with
              hands-on technical experience and a strong learning mindset, feel
              free to reach out I’d be glad to connect.
            </p>

            <div className="flex items-center gap-4 text-gray-300">
              <FaPhone className="text-cyan-400 text-xl" />
              <span>+254 713 240 931</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <FaEnvelope className="text-cyan-400 text-xl" />
              <span>uelkiprotich@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <FaMapMarkerAlt className="text-cyan-400 text-xl" />
              <span>Eldoret, Kenya</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <a
                href="https://wa.me/254713240931?text=Hi%20Uel,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-400 transition"
              >
                <img
                  src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
                  alt="WhatsApp"
                  className="w-6 h-6"
                />
                <span>WhatsApp Me</span>
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-4 pt-4 text-xl text-cyan-400">
              <a
                href="https://github.com/uelkiprotich"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/uel-kiprotich-659395231/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Right Side Form — ACTION CONNECTED */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
                value={formData.first_name}
                onChange={handleChange}
                className="bg-[#1a1d2e] p-3 rounded text-white"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
                value={formData.last_name}
                onChange={handleChange}
                className="bg-[#1a1d2e] p-3 rounded text-white"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-[#1a1d2e] p-3 rounded text-white"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="bg-[#1a1d2e] p-3 rounded text-white"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#1a1d2e] p-3 rounded text-white"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#1a1d2e] p-3 rounded text-white"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-400 text-black py-2 rounded font-semibold hover:bg-cyan-500 transition"
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
            {responseMsg && (
              <p className={`mt-4 ${responseMsg.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                {responseMsg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
